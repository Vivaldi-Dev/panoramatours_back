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
exports.deleteActivityById = exports.getActivityById = exports.getActivities = exports.createActivity = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, date, price, highlights } = req.body;
        const photoFiles = req.files;
        const highlightsArray = JSON.parse(highlights);
        console.log(highlightsArray);
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
                highlights: {
                    create: highlightsArray.map((text) => ({
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
            include: {
                photos: true,
                highlights: true,
            },
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
        const activityId = Number(id);
        if (isNaN(activityId)) {
            res.status(400).json({ error: 'ID deve ser um número válido' });
            return;
        }
        const activity = yield prisma.activity.findUnique({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar atividade' });
    }
});
exports.getActivityById = getActivityById;
const deleteActivityById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const activityId = Number(id);
        if (isNaN(activityId)) {
            res.status(400).json({ error: 'ID deve ser um número válido' });
            return;
        }
        const existingActivity = yield prisma.activity.findUnique({
            where: { id: activityId },
        });
        if (!existingActivity) {
            res.status(404).json({ error: 'Atividade não encontrada' });
            return;
        }
        yield prisma.highlight.deleteMany({
            where: { activityId },
        });
        yield prisma.activityPhoto.deleteMany({
            where: { activityId },
        });
        yield prisma.activity.delete({
            where: { id: activityId },
        });
        res.status(200).json({ message: 'Atividade deletada com sucesso' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar atividade' });
    }
});
exports.deleteActivityById = deleteActivityById;
