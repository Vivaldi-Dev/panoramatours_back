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
exports.getActivitiesByCity = void 0;
const CityActivityService_1 = require("../services/CityActivityService");
const cityActivityService = new CityActivityService_1.CityActivityService();
const getActivitiesByCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { keyword, countryCode, radius } = req.query;
        if (!keyword || typeof keyword !== 'string') {
            res.status(400).json({ error: 'Parâmetro "keyword" é obrigatório' });
            return;
        }
        const activities = yield cityActivityService.getActivitiesByCity(keyword, typeof countryCode === 'string' ? countryCode : undefined, radius ? parseInt(radius) : 5);
        res.status(200).json(activities);
    }
    catch (error) {
        console.error('Erro no controller:', error);
        res.status(500).json({
            error: error instanceof Error ? error.message : 'Erro ao buscar atividades'
        });
    }
});
exports.getActivitiesByCity = getActivitiesByCity;
