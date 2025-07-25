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
exports.getAmadeusAccessToken = getAmadeusAccessToken;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function getAmadeusAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const params = new URLSearchParams({
                grant_type: 'client_credentials',
                client_id: process.env.AMADEUS_CLIENT_ID,
                client_secret: process.env.AMADEUS_CLIENT_SECRET,
            });
            const response = yield axios_1.default.post('https://test.api.amadeus.com/v1/security/oauth2/token', params.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data.access_token;
        }
        catch (error) {
            console.error('Erro ao obter token da Amadeus:', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
            throw new Error('Falha na autenticação com a Amadeus');
        }
    });
}
