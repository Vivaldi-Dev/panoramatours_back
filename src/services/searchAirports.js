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
exports.searchAirports = searchAirports;
const axios_1 = __importDefault(require("axios"));
const amadeusAuth_1 = require("./amadeusAuth");
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
function searchAirports(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
            const requestParams = Object.assign({ subType: params.subType || 'AIRPORT,CITY', keyword: params.keyword, view: params.view || 'LIGHT' }, (params.countryCode && { countryCode: params.countryCode }));
            const response = yield axios_1.default.get('https://test.api.amadeus.com/v1/reference-data/locations', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.amadeus+json'
                },
                params: requestParams
            });
            const amadeusResults = response.data.data.map(r => ({
                type: r.type,
                subType: r.subType,
                name: r.name,
                iataCode: r.iataCode,
                address: r.address
            }));
            const localResults = yield prisma.iATACode.findMany({
                where: {
                    OR: [
                        { name: { contains: params.keyword } },
                        { code: { equals: params.keyword.toUpperCase() } }
                    ]
                }
            });
            const localMapped = localResults.map((iata) => ({
                type: "location",
                subType: "AIRPORT",
                name: iata.name,
                iataCode: iata.code,
                address: {
                    cityName: iata.name,
                    countryName: iata.country,
                    countryCode: "MZ"
                }
            }));
            const combined = [...amadeusResults, ...localMapped];
            const unique = combined.filter((value, index, self) => index === self.findIndex((t) => t.iataCode === value.iataCode));
            return unique;
        }
        catch (error) {
            console.error("Erro na busca de aeroportos:", error);
            const fallback = yield prisma.iATACode.findMany({
                where: {
                    OR: [
                        { name: { contains: params.keyword } },
                        { code: { equals: params.keyword.toUpperCase() } }
                    ]
                }
            });
            return fallback.map((iata) => ({
                type: "location",
                subType: "AIRPORT",
                name: iata.name,
                iataCode: iata.code,
                address: {
                    cityName: iata.name,
                    countryName: iata.country,
                    countryCode: "MZ"
                }
            }));
        }
    });
}
