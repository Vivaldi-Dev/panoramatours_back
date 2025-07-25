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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.primaClient = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const amadeusAuth_1 = require("./services/amadeusAuth");
const searchFlights_1 = require("./services/searchFlights");
const routes_1 = __importDefault(require("./routes/routes"));
const cityActivity_1 = __importDefault(require("./routes/cityActivity"));
const path_1 = __importDefault(require("path"));
const carRoutes_1 = __importDefault(require("./routes/carRoutes"));
const prisma_1 = require("./generated/prisma");
const rentACarRoutes_1 = __importDefault(require("./routes/rentACarRoutes"));
const activityRoutes_1 = __importDefault(require("./routes/activityRoutes"));
const app = (0, express_1.default)();
const PORT = 4000;
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'https://panoramatours.co.mz',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use('/api', carRoutes_1.default);
app.get("/", (req, res) => {
    res.send("odoo");
});
app.use('/api', cityActivity_1.default);
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '..', 'uploads')));
app.use('/api', activityRoutes_1.default);
app.use('/api', rentACarRoutes_1.default);
app.get("/amadeus-token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
        res.json({ access_token: token });
    }
    catch (err) {
        res.status(500).json({ error: "Falha ao obter token da Amadeus" });
    }
}));
app.post('/api/search-flights', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { origem, destino, dataInicio, dataFim, adultos, criancas } = req.body;
        console.log(req.body);
        const data = yield (0, searchFlights_1.searchFlights)({
            originLocationCode: origem,
            destinationLocationCode: destino,
            departureDate: dataInicio,
            returnDate: dataFim,
            adults: parseInt(adultos),
            children: parseInt(criancas || 0),
            nonStop: false,
            max: 100,
            currencyCode: 'MZN'
        });
        res.json(data);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao buscar voos' });
    }
}));
exports.primaClient = new prisma_1.PrismaClient({
    log: ['query']
});
app.use('/api', routes_1.default);
app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
