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
exports.deleteAllIATACodes = exports.suggestIATACodes = exports.getIATACodes = exports.createIATACode = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createIATACode = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, name, country } = req.body;
        if (!code || !name || !country) {
            res.status(400).json({ success: false, message: "Campos obrigatórios: code, name, country" });
            return;
        }
        const newIATACode = yield prisma.iATACode.create({
            data: { code, name, country }
        });
        res.status(201).json({ success: true, data: newIATACode });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Erro ao criar IATA code", error });
    }
});
exports.createIATACode = createIATACode;
const getIATACodes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const codes = yield prisma.iATACode.findMany();
        res.json({ success: true, data: codes });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar IATA codes", error });
    }
});
exports.getIATACodes = getIATACodes;
const suggestIATACodes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        if (!name || typeof name !== "string") {
            res.status(400).json({ success: false, message: "Informe um nome para buscar" });
            return;
        }
        const suggestions = yield prisma.iATACode.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        });
        res.json({ success: true, data: suggestions });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Erro ao buscar sugestão", error });
    }
});
exports.suggestIATACodes = suggestIATACodes;
const deleteAllIATACodes = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield prisma.iATACode.deleteMany({});
        res.json({
            success: true,
            message: `Todos os códigos IATA (${result.count}) foram removidos com sucesso`,
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Erro ao remover todos os códigos IATA",
            error
        });
    }
});
exports.deleteAllIATACodes = deleteAllIATACodes;
