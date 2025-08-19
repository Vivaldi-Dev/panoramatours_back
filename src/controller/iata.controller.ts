import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const createIATACode = async (req: Request, res: Response): Promise<void> => {
    try {
        const { code, name, country } = req.body;

        if (!code || !name || !country) {
            res.status(400).json({ success: false, message: "Campos obrigatórios: code, name, country" });
            return;
        }

        const newIATACode = await prisma.iATACode.create({
            data: { code, name, country }
        });

        res.status(201).json({ success: true, data: newIATACode });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro ao criar IATA code", error });
    }
};

export const getIATACodes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const codes = await prisma.iATACode.findMany();
        res.json({ success: true, data: codes });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar IATA codes", error });
    }
};

export const suggestIATACodes = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.query;

        if (!name || typeof name !== "string") {
            res.status(400).json({ success: false, message: "Informe um nome para buscar" });
            return;
        }

        const suggestions = await prisma.iATACode.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        });


        res.json({ success: true, data: suggestions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar sugestão", error });
    }
};

export const deleteAllIATACodes = async (_req: Request, res: Response): Promise<void> => {
    try {
        const result = await prisma.iATACode.deleteMany({});

        res.json({
            success: true,
            message: `Todos os códigos IATA (${result.count}) foram removidos com sucesso`,
            data: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro ao remover todos os códigos IATA",
            error
        });
    }
};