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
const express_1 = require("express");
const searchAirports_1 = require("../services/searchAirports");
const airportRoutes = (0, express_1.Router)();
airportRoutes.get('/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const params = {
            subType: req.query.subType,
            keyword: req.query.keyword,
            view: req.query.view,
            countryCode: req.query.countryCode
        };
        const airports = yield (0, searchAirports_1.searchAirports)(params);
        res.status(200).json(airports);
    }
    catch (error) {
        console.error('Erro na busca de aeroportos:', error);
        let errorMessage = 'Erro desconhecido';
        let errorDetails = null;
        if (error instanceof Error) {
            errorMessage = error.message;
            if (isAmadeusError(error)) {
                errorDetails = ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || null;
            }
        }
        res.status(500).json({
            error: errorMessage,
            details: errorDetails
        });
    }
}));
function isAmadeusError(error) {
    var _a;
    return ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) !== undefined;
}
exports.default = airportRoutes;
