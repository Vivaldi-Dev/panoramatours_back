"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const iata_controller_1 = require("../controller/iata.controller");
const iatarouter = express_1.default.Router();
iatarouter.post("/iata", iata_controller_1.createIATACode);
iatarouter.get("/iata", iata_controller_1.getIATACodes);
iatarouter.get("/iata/suggest", iata_controller_1.suggestIATACodes);
iatarouter.delete("/all", iata_controller_1.deleteAllIATACodes);
exports.default = iatarouter;
