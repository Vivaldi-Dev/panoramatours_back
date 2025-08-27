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
exports.searchLocalFlights = exports.searchAllFlights = exports.createFlightPair = void 0;
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const createFlightPair = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { origin, destination, departureDate, returnDate, departureDay, returnDay, airline, flightNumberOut, flightNumberBack, fareOut, fareBack, } = req.body;
        const newFlight = yield prisma.flightPair.create({
            data: {
                origin,
                destination,
                departureDate: new Date(departureDate),
                returnDate: new Date(returnDate),
                departureDay,
                returnDay,
                airline,
                flightNumberOut,
                flightNumberBack,
                fareOut,
                fareBack,
            },
        });
        res.status(201).json(newFlight);
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao criar simulação de voo" });
        return;
    }
});
exports.createFlightPair = createFlightPair;
const searchAllFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { origin, destination, departureDate, returnDate, currencyCode = "MZN", } = req.body;
        if (!origin || !destination) {
            res.status(400).json({ error: "Origem e destino são obrigatórios" });
            return;
        }
        const normalizedOrigin = origin.toString().trim().toUpperCase();
        const normalizedDestination = destination.toString().trim().toUpperCase();
        const getMonthRange = (dateString) => {
            if (!dateString)
                return null;
            const date = new Date(dateString);
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
            return { gte: firstDay, lte: lastDay };
        };
        const localResults = yield prisma.flightPair.findMany({
            where: Object.assign(Object.assign({ origin: normalizedOrigin, destination: normalizedDestination }, (departureDate && {
                departureDate: getMonthRange(departureDate),
            })), (returnDate && {
                returnDate: getMonthRange(returnDate),
            })),
            orderBy: [
                { departureDate: 'asc' },
                { fareOut: 'asc' }
            ],
        });
        console.log("Voos locais encontrados:", localResults.length, "resultados");
        const formattedLocal = localResults.map((f) => {
            const baseFlight = {
                type: "local",
                id: f.id,
                origin: f.origin,
                destination: f.destination,
                departureDate: f.departureDate,
                airline: f.airline,
                flightNumberOut: f.flightNumberOut,
                fareOut: f.fareOut,
                currency: currencyCode,
            };
            if (f.returnDate && f.flightNumberBack && f.fareBack) {
                return Object.assign(Object.assign({}, baseFlight), { returnDate: f.returnDate, flightNumberBack: f.flightNumberBack, fareBack: f.fareBack });
            }
            return baseFlight;
        });
        res.json(formattedLocal);
    }
    catch (error) {
        console.error("Erro na busca de voos locais:", error);
        res.status(500).json({ error: "Falha na busca de voos locais" });
    }
});
exports.searchAllFlights = searchAllFlights;
const searchLocalFlights = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { origin, destination, departureDate, returnDate } = req.query;
        console.log("Query Params:", req.query);
        const flights = yield prisma.flightPair.findMany({
            where: Object.assign(Object.assign({ origin: origin, destination: destination }, (departureDate && {
                departureDate: {
                    gte: new Date(departureDate),
                    lt: new Date(new Date(departureDate).getTime() + 24 * 60 * 60 * 1000)
                }
            })), (returnDate && {
                returnDate: {
                    gte: new Date(returnDate),
                    lt: new Date(new Date(returnDate).getTime() + 24 * 60 * 60 * 1000)
                }
            }))
        });
        console.log("Flights encontrados:", flights);
        res.json(flights);
        return;
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar voos simulados" });
        return;
    }
});
exports.searchLocalFlights = searchLocalFlights;
