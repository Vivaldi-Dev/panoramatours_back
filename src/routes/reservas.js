"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tourPackageEmailController_1 = require("../controller/tourPackageEmailController");
const Reservasrouter = express_1.default.Router();
Reservasrouter.post('/reservas', tourPackageEmailController_1.reservarPacote);
exports.default = Reservasrouter;
