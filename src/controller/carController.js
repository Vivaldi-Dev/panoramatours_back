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
exports.updateCar = exports.deleteCar = exports.findCarByName = exports.listCars = exports.createCar = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
// Criar carro
const createCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { model, description, mileage, fuel, engine, seats, doors, year, transmission, price } = req.body;
    if (!model || !description || !mileage || !fuel || !engine || !seats || !doors || !year || !transmission || !price) {
        res.status(400).json({ error: "Todos os campos são obrigatórios." });
        return;
    }
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    try {
        const car = yield prisma.car.create({
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
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Erro ao criar carro.",
            details: error.message || error
        });
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
        const cars = yield prisma.car.findMany({
            where: {
                model: {
                    contains: model.toLowerCase()
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
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.car.delete({
            where: { id: parseInt(id) }
        });
        res.json({ message: "Carro deletado com sucesso." });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao deletar carro." });
    }
});
exports.deleteCar = deleteCar;
const updateCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { model, description, mileage, fuel, engine, seats, doors, year, transmission, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : undefined;
    try {
        const updatedCar = yield prisma.car.update({
            where: { id: parseInt(id) },
            data: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (model && { model })), (description && { description })), (mileage && { mileage: parseInt(mileage) })), (fuel && { fuel })), (engine && { engine })), (seats && { seats: parseInt(seats) })), (doors && { doors: parseInt(doors) })), (year && { year: parseInt(year) })), (transmission && { transmission })), (price && { price: parseFloat(price) })), (image && { image })),
        });
        res.json(updatedCar);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao atualizar carro." });
    }
});
exports.updateCar = updateCar;
