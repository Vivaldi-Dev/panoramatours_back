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
exports.RentACarController = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
exports.RentACarController = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { carId, pickupLocation, dropoffLocation, pickupDate, dropoffDate } = req.body;
                if (!carId || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
                    res.status(400).json({ error: "Todos os campos são obrigatórios." });
                    return;
                }
                const carExists = yield prisma.car.findUnique({ where: { id: carId } });
                if (!carExists) {
                    res.status(404).json({ error: "Carro não encontrado." });
                    return;
                }
                const rent = yield prisma.rentACar.create({
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
            }
            catch (error) {
                console.error("Erro ao criar aluguel:", error);
                res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    },
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const rents = yield prisma.rentACar.findMany({
                    include: { car: true },
                });
                res.status(200).json(rents);
            }
            catch (error) {
                console.error("Erro ao listar aluguéis:", error);
                res.status(500).json({ error: "Erro interno do servidor." });
            }
        });
    }
};
