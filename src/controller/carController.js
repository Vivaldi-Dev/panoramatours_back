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
exports.findCarByName = exports.listCars = exports.createCar = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { model, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    try {
        const car = yield prisma.car.create({
            data: {
                model,
                description,
                image: image || '',
            },
        });
        res.json(car);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar carro." });
    }
});
exports.createCar = createCar;
const listCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield prisma.car.findMany();
        res.json(cars);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar carros." });
    }
});
exports.listCars = listCars;
const findCarByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { model } = req.query;
    if (!model || typeof model !== 'string') {
        res.status(400).json({ error: 'O parâmetro "model" é obrigatório e deve ser uma string.' });
        return;
    }
    try {
        const searchModel = model.toLowerCase();
        const cars = yield prisma.car.findMany({
            where: {
                model: {
                    contains: searchModel,
                },
            },
        });
        res.json(cars);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar carro pelo modelo." });
    }
});
exports.findCarByName = findCarByName;
