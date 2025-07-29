"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActivityById = exports.getActivities = exports.createActivity = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, date, price } = req.body;
        const photoFiles = req.files;
        const activity = yield prisma.activity.create({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar atividade' });
    }
});
exports.createActivity = createActivity;
const getActivities = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activities = yield prisma.activity.findMany({
            include: { photos: true },
            orderBy: { date: 'desc' },
        });
        res.status(200).json(activities);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar atividades' });
    }
});
exports.getActivities = getActivities;
const getActivityById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Converter para número e validar
        const activityId = Number(id);
        if (isNaN(activityId)) {
            res.status(400).json({ error: 'ID deve ser um número válido' });
            return;
        }
        const activity = yield prisma.activity.findUnique({
            where: { id: activityId }, // Passando como número
            include: { photos: true },
        });
        if (!activity) {
            res.status(404).json({ error: 'Atividade não encontrada' });
            return;
        }
        res.status(200).json(activity);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar atividade' });
    }
});
exports.getActivityById = getActivityById;
