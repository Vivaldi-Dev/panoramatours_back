import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import path from 'path';

const prisma = new PrismaClient();

export const createActivity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date, price, highlights } = req.body;

    const photoFiles = req.files as Express.Multer.File[];
    const highlightsArray = JSON.parse(highlights);

    console.log(highlightsArray)


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
        highlights: {
          create: (highlightsArray as string[]).map((text: string) => ({
            text: text.trim()
          }))
        }

      },
      include: {
        photos: true,
        highlights: true
      }
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
      include: {
        photos: true,
        highlights: true,
      },
      orderBy: { date: 'desc' },
    });

    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar atividades' });
  }
};

export const getActivityById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const activityId = Number(id);
    if (isNaN(activityId)) {
      res.status(400).json({ error: 'ID deve ser um número válido' });
      return;
    }

    const activity = await prisma.activity.findUnique({
      where: { id: activityId },
      include: {
        photos: true,
        highlights: true,

      },

    });

    if (!activity) {
      res.status(404).json({ error: 'Atividade não encontrada' });
      return;
    }

    res.status(200).json(activity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar atividade' });
  }
};

export const deleteActivityById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const activityId = Number(id);
    if (isNaN(activityId)) {
      res.status(400).json({ error: 'ID deve ser um número válido' });
      return;
    }

    const existingActivity = await prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!existingActivity) {
      res.status(404).json({ error: 'Atividade não encontrada' });
      return;
    }

    await prisma.highlight.deleteMany({
      where: { activityId },
    });

    await prisma.activityPhoto.deleteMany({
      where: { activityId },
    });

    await prisma.activity.delete({
      where: { id: activityId },
    });

    res.status(200).json({ message: 'Atividade deletada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar atividade' });
  }
};


