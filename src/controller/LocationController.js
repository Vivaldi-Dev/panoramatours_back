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
exports.getLocations = exports.createLocation = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, latitude, longitude, type } = req.body;
        if (!name || latitude === undefined || longitude === undefined || !type) {
            res.status(400).json({
                message: "All fields are required: name, latitude, longitude, type"
            });
            return;
        }
        const location = yield prisma.location.create({
            data: {
                name,
                latitude: parseFloat(latitude),
                longitude: parseFloat(longitude),
                type,
            },
        });
        res.status(201).json({
            message: "Location created successfully",
            location,
        });
    }
    catch (error) {
        console.error("Error creating location:", error);
        if (error.code === 'P2002') {
            res.status(409).json({ message: "Location name must be unique" });
        }
        else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});
exports.createLocation = createLocation;
const getLocations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const locations = yield prisma.location.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        res.status(200).json({
            message: "Locations fetched successfully",
            data: locations,
        });
    }
    catch (error) {
        console.error("Error fetching locations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.getLocations = getLocations;
