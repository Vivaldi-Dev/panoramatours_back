import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import path from 'path';

const prisma = new PrismaClient();

export const createActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, price } = req.body;

    const photoFiles = req.files as Express.Multer.File[];

    const activity = await prisma.activity.create({
      data: {
        title,
        description,
        date: new Date(date),
        price: parseFloat(price),
        photos: {
          create: photoFiles.map((file) => ({
            url: `/uploads/${file.filename}`,
          })),
        },
      },
      include: { photos: true },
    });

    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar atividade' });
  }
};

export const getActivities = async (_req: Request, res: Response): Promise<void> => {
  try {
    const activities = await prisma.activity.findMany({
      include: { photos: true },
      orderBy: { date: 'desc' },
    });

    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar atividades' });
  }
};
