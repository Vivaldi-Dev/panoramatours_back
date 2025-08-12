import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const createTourPackage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, price, peopleCount, audienceType, nightsCount, highlights } = req.body;
        const photoFiles = req.files as Express.Multer.File[];

        if (!title || !price || !peopleCount || !audienceType || !nightsCount) {
            res.status(400).json({ message: "Campos obrigatórios faltando" });
            return;
        }

        const parsedHighlights = typeof highlights === 'string' 
            ? JSON.parse(highlights)
            : highlights || [];

        const newTourPackage = await prisma.tourPackage.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                peopleCount: parseInt(peopleCount),
                audienceType,
                nightsCount: parseInt(nightsCount),
                highlights: {
                    create: parsedHighlights.map((text: string) => ({ text }))
                }
            },
            include: {
                highlights: true 
            }
        });


        if (photoFiles && photoFiles.length > 0) {
            const photoData = photoFiles.map((file) => ({
                url: `/uploads/${file.filename}`,
                tourPackageId: newTourPackage.id,
            }));

            await prisma.tourPhoto.createMany({
                data: photoData,
            });
        }

        const packageWithRelations = await prisma.tourPackage.findUnique({
            where: { id: newTourPackage.id },
            include: { 
                photos: true,
                highlights: true
            }
        });

        res.status(201).json({
            message: "Pacote de turismo criado com sucesso",
            tourPackage: packageWithRelations,
        });

    } catch (error: any) {
        console.error("Erro ao criar pacote de turismo:", error);
        res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
};


export const getAllTourPackages = async (req: Request, res: Response): Promise<void> => {
    try {
        const packages = await prisma.tourPackage.findMany({
            include: {
                photos: true,
            },
        });

        res.status(200).json({ data: packages });
    } catch (error: any) {
        console.error("Erro ao buscar pacotes:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const getTourPackageById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const tourPackage = await prisma.tourPackage.findUnique({
            where: { id: Number(id) },
            include: { photos: true },
        });

        if (!tourPackage) {
            res.status(404).json({ message: "Pacote não encontrado" });
            return;
        }

        res.status(200).json(tourPackage);
    } catch (error: any) {
        console.error("Erro ao buscar pacote:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};


export const deleteTourPackage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const existing = await prisma.tourPackage.findUnique({ where: { id: Number(id) } });

        if (!existing) {
            res.status(404).json({ message: "Pacote não encontrado" });
            return;
        }

        await prisma.tourPackage.delete({
            where: { id: Number(id) },
        });

        res.status(200).json({ message: "Pacote deletado com sucesso" });

    } catch (error: any) {
        console.error("Erro ao deletar pacote:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};


