"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const LocationController_1 = require("../controller/LocationController");
const RouterLocations = express_1.default.Router();
RouterLocations.post("/locations", LocationController_1.createLocation);
RouterLocations.get("/locations", LocationController_1.getLocations);
exports.default = RouterLocations;
