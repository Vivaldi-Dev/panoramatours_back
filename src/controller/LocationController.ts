import { Request, Response } from "express";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const createLocation = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, latitude, longitude, type } = req.body;

        if (!name || latitude === undefined || longitude === undefined || !type) {
            res.status(400).json({
                message: "All fields are required: name, latitude, longitude, type"
            });
            return;
        }

        const location = await prisma.location.create({
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
    } catch (error: any) {
        console.error("Error creating location:", error);

        if (error.code === 'P2002') {
            res.status(409).json({ message: "Location name must be unique" });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

export const getLocations = async (req: Request, res: Response): Promise<void> => {
    try {
        const locations = await prisma.location.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        res.status(200).json({
            message: "Locations fetched successfully",
            data: locations,
        });
    } catch (error) {
        console.error("Error fetching locations:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
