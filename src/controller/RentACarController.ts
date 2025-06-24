import { Request, Response } from 'express';
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export const RentACarController = {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { carId, pickupLocation, dropoffLocation, pickupDate, dropoffDate } = req.body;

      if (!carId || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
        res.status(400).json({ error: "Todos os campos são obrigatórios." });
        return;
      }

      const carExists = await prisma.car.findUnique({ where: { id: carId } });
      if (!carExists) {
        res.status(404).json({ error: "Carro não encontrado." });
        return;
      }

      const rent = await prisma.rentACar.create({
        data: {
          carId,
          pickupLocation,
          dropoffLocation,
          pickupDate: new Date(pickupDate),
          dropoffDate: new Date(dropoffDate),
        },
        include: { car: true },
      });

      res.status(201).json(rent);
    } catch (error) {
      console.error("Erro ao criar aluguel:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  },

  async list(req: Request, res: Response): Promise<void> {
    try {
      const rents = await prisma.rentACar.findMany({
        include: { car: true },
      });
      res.status(200).json(rents);
    } catch (error) {
      console.error("Erro ao listar aluguéis:", error);
      res.status(500).json({ error: "Erro interno do servidor." });
    }
  }
};