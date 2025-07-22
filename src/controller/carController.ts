import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { error } from "console";
const prisma = new PrismaClient();

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

  console.log('data:', req.body)

  if (!model || !description || !mileage || !fuel || !engine || !seats || !doors || !year || !transmission || !price) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return
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
      error: "Erro ao criar carrosssss.",
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
    const searchModel = (model as string).toLowerCase();

    const cars = await prisma.car.findMany({
      where: {
        model: {
          contains: searchModel,
        },
      },
    });
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar carro pelo modelo." });
  }
};
