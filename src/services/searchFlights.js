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
exports.searchFlights = searchFlights;
const axios_1 = __importDefault(require("axios"));
const amadeusAuth_1 = require("./amadeusAuth");
function searchFlights(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
            console.log(" token", token);
            const response = yield axios_1.default.get('https://test.api.amadeus.com/v2/shopping/flight-offers', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.amadeus+json'
                },
                params: {
                    originLocationCode: params.originLocationCode,
                    destinationLocationCode: params.destinationLocationCode,
                    departureDate: params.departureDate,
                    returnDate: params.returnDate,
                    adults: params.adults,
                    children: params.children || 0,
                    nonStop: params.nonStop,
                    max: params.max || 5,
                    currencyCode: params.currencyCode || 'MZN'
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Erro ao buscar voos:', error);
            throw new Error('Falha na busca de voos');
        }
    });
}
