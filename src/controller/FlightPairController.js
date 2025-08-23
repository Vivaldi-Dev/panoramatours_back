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
const searchFlights_1 = require("../services/searchFlights");
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
    var _a;
    try {
        const { origin, destination, departureDate, returnDate, adults = 1, children = 0, nonStop, max = 5, currencyCode = "MZN", } = req.query;
        let amadeusResults = [];
        try {
            const amadeusResponse = yield (0, searchFlights_1.searchFlights)({
                originLocationCode: origin,
                destinationLocationCode: destination,
                departureDate: departureDate,
                returnDate: returnDate,
                adults: Number(adults),
                children: Number(children),
                nonStop: nonStop === "true",
                max: Number(max),
                currencyCode: currencyCode,
            });
            amadeusResults = ((_a = amadeusResponse.data) === null || _a === void 0 ? void 0 : _a.data) || []; // Atenção ao caminho correto da resposta do Amadeus
        }
        catch (err) {
            console.warn("Amadeus não retornou resultados ou falhou:", err);
        }
        // Busca local usando intervalo de datas (dia inicial)
        const localResults = yield prisma.flightPair.findMany({
            where: Object.assign(Object.assign({ origin: origin, destination: destination }, (departureDate && {
                departureDate: {
                    gte: new Date(departureDate),
                    lt: new Date(new Date(departureDate).getTime() + 24 * 60 * 60 * 1000),
                },
            })), (returnDate && {
                returnDate: {
                    gte: new Date(returnDate),
                    lt: new Date(new Date(returnDate).getTime() + 24 * 60 * 60 * 1000),
                },
            })),
        });
        console.log("Voos locais encontrados:", localResults);
        const formattedLocal = localResults.map((f) => ({
            type: "local",
            id: f.id,
            origin: f.origin,
            destination: f.destination,
            departureDate: f.departureDate,
            returnDate: f.returnDate,
            airline: f.airline,
            flightNumberOut: f.flightNumberOut,
            flightNumberBack: f.flightNumberBack,
            fareOut: f.fareOut,
            fareBack: f.fareBack,
            currency: "MZN",
        }));
        const formattedAmadeus = amadeusResults.map((f) => (Object.assign({ type: "amadeus" }, f)));
        const allFlights = [...formattedAmadeus, ...formattedLocal];
        res.json(allFlights);
    }
    catch (error) {
        console.error("Erro na busca de voos:", error);
        res.status(500).json({ error: "Falha na busca de voos" });
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
