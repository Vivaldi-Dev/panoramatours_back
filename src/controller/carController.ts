import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

// Criar carro
export const createCar = async (req: Request, res: Response): Promise<void> => {
  const {
    model,
    description,
    mileage,
    fuel,
    engine,
    seats,
    doors,
    year,
    transmission,
    price
  } = req.body;

  if (!model || !description || !mileage || !fuel || !engine || !seats || !doors || !year || !transmission || !price) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  const image = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const car = await prisma.car.create({
      data: {
        model,
        description,
        image: image || '',
        mileage: parseInt(mileage),
        fuel,
        engine,
        seats: parseInt(seats),
        doors: parseInt(doors),
        year: parseInt(year),
        transmission,
        price: parseFloat(price)
      },
    });
    res.status(201).json(car);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: "Erro ao criar carro.",
      details: error.message || error
    });
  }
};

export const listCars = async (req: Request, res: Response) => {
  try {
    const cars = await prisma.car.findMany();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar carros." });
  }
};

export const findCarByName = async (req: Request, res: Response): Promise<void> => {
  const { model } = req.query;

  if (!model || typeof model !== 'string') {
    res.status(400).json({ error: 'O parâmetro "model" é obrigatório e deve ser uma string.' });
    return;
  }

  try {
    const cars = await prisma.car.findMany({
      where: {
        model: {
          contains: model.toLowerCase()
        },
      },
    });

    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar carro pelo modelo." });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.car.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: "Carro deletado com sucesso." });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar carro." });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    model,
    description,
    mileage,
    fuel,
    engine,
    seats,
    doors,
    year,
    transmission,
    price
  } = req.body;

  const image = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    const updatedCar = await prisma.car.update({
      where: { id: parseInt(id) },
      data: {
        ...(model && { model }),
        ...(description && { description }),
        ...(mileage && { mileage: parseInt(mileage) }),
        ...(fuel && { fuel }),
        ...(engine && { engine }),
        ...(seats && { seats: parseInt(seats) }),
        ...(doors && { doors: parseInt(doors) }),
        ...(year && { year: parseInt(year) }),
        ...(transmission && { transmission }),
        ...(price && { price: parseFloat(price) }),
        ...(image && { image }),
      },
    });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar carro." });
  }
};
