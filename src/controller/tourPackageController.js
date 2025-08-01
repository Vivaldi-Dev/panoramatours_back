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
exports.deleteTourPackage = exports.getTourPackageById = exports.getAllTourPackages = exports.createTourPackage = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createTourPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price, peopleCount, audienceType, nightsCount, highlights } = req.body;
        const photoFiles = req.files;
        if (!title || !price || !peopleCount || !audienceType || !nightsCount) {
            res.status(400).json({ message: "Campos obrigatórios faltando" });
            return;
        }
        const parsedHighlights = typeof highlights === 'string'
            ? JSON.parse(highlights)
            : highlights || [];
        const newTourPackage = yield prisma.tourPackage.create({
            data: {
                title,
                description,
                price: parseFloat(price),
                peopleCount: parseInt(peopleCount),
                audienceType,
                nightsCount: parseInt(nightsCount),
                highlights: {
                    create: parsedHighlights.map((text) => ({ text }))
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
            yield prisma.tourPhoto.createMany({
                data: photoData,
            });
        }
        const packageWithRelations = yield prisma.tourPackage.findUnique({
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
    }
    catch (error) {
        console.error("Erro ao criar pacote de turismo:", error);
        res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
});
exports.createTourPackage = createTourPackage;
const getAllTourPackages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield prisma.tourPackage.findMany({
            include: {
                photos: true,
            },
        });
        res.status(200).json({ data: packages });
    }
    catch (error) {
        console.error("Erro ao buscar pacotes:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});
exports.getAllTourPackages = getAllTourPackages;
const getTourPackageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tourPackage = yield prisma.tourPackage.findUnique({
            where: { id: Number(id) },
            include: { photos: true },
        });
        if (!tourPackage) {
            res.status(404).json({ message: "Pacote não encontrado" });
            return;
        }
        res.status(200).json(tourPackage);
    }
    catch (error) {
        console.error("Erro ao buscar pacote:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});
exports.getTourPackageById = getTourPackageById;
const deleteTourPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const existing = yield prisma.tourPackage.findUnique({ where: { id: Number(id) } });
        if (!existing) {
            res.status(404).json({ message: "Pacote não encontrado" });
            return;
        }
        yield prisma.tourPackage.delete({
            where: { id: Number(id) },
        });
        res.status(200).json({ message: "Pacote deletado com sucesso" });
    }
    catch (error) {
        console.error("Erro ao deletar pacote:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});
exports.deleteTourPackage = deleteTourPackage;
