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
exports.searchAirports = searchAirports;
const axios_1 = __importStar(require("axios"));
const amadeusAuth_1 = require("./amadeusAuth");
function searchAirports(params) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const token = yield (0, amadeusAuth_1.getAmadeusAccessToken)();
            console.log("Token usado para buscar aeroportos:", token);
            const requestParams = Object.assign({ subType: params.subType || 'AIRPORT,CITY', keyword: params.keyword, view: params.view || 'LIGHT' }, (params.countryCode && { countryCode: params.countryCode }));
            const response = yield axios_1.default.get('https://test.api.amadeus.com/v1/reference-data/locations', {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/vnd.amadeus+json'
                },
                params: requestParams
            });
            return response.data.data || [];
        }
        catch (error) {
            let errorMessage = 'Erro desconhecido';
            let errorDetails = null;
            if (error instanceof axios_1.AxiosError) {
                errorMessage = error.message;
                errorDetails = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
                console.error('Erro detalhado ao buscar aeroportos:', errorDetails || errorMessage);
            }
            else if (error instanceof Error) {
                errorMessage = error.message;
                console.error('Erro ao buscar aeroportos:', errorMessage);
            }
            throw new Error(`Falha na busca de aeroportos: ${errorMessage}`);
        }
    });
}
