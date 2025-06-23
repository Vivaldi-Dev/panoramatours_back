"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.CityActivityService = void 0;
const axios_1 = __importStar(require("axios"));
const amadeusAuth_1 = require("./amadeusAuth");
class CityActivityService {
    constructor() {
        this.baseUrl = 'https://test.api.amadeus.com/v1';
    }
    getCityGeoCode(keyword, countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
                const response = yield axios_1.default.get(`${this.baseUrl}/reference-data/locations/cities`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: Object.assign(Object.assign({ keyword }, (countryCode && { countryCode })), { max: 1 })
                });
                const city = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[0];
                if (!(city === null || city === void 0 ? void 0 : city.geoCode)) {
                    throw new Error('Cidade não encontrada');
                }
                return city.geoCode;
            }
            catch (error) {
                console.error('Erro ao buscar cidade:', error instanceof axios_1.AxiosError ? (_c = error.response) === null || _c === void 0 ? void 0 : _c.data : error);
                throw new Error('Falha ao localizar cidade');
            }
        });
    }
    getActivitiesByCity(keyword_1, countryCode_1) {
        return __awaiter(this, arguments, void 0, function* (keyword, countryCode, radiusKm = 5) {
            var _a;
            try {
                // 1. Primeiro obtém as coordenadas
                const geoCode = yield this.getCityGeoCode(keyword, countryCode);
                // 2. Busca as atividades
                const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
                const response = yield axios_1.default.get(`${this.baseUrl}/shopping/activities`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        latitude: geoCode.latitude,
                        longitude: geoCode.longitude,
                        radius: radiusKm
                    }
                });
                return ((_a = response.data.data) === null || _a === void 0 ? void 0 : _a.map((act) => {
                    var _a;
                    return ({
                        name: act.name,
                        description: act.description,
                        geoCode: act.geoCode,
                        rating: ((_a = act.rating) === null || _a === void 0 ? void 0 : _a.toString()) || undefined
                    });
                })) || [];
            }
            catch (error) {
                console.error('Erro ao buscar atividades:', error);
                throw new Error('Falha ao buscar atividades');
            }
        });
    }
}
exports.CityActivityService = CityActivityService;
