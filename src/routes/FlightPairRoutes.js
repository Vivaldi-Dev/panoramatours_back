"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const FlightPairController_1 = require("../controller/FlightPairController");
const Flightrouter = express_1.default.Router();
Flightrouter.post('/post-booking', FlightPairController_1.createFlightPair);
Flightrouter.get('/search/LocalFlight', FlightPairController_1.searchLocalFlights);
Flightrouter.post('/search-all-flights', FlightPairController_1.searchAllFlights);
exports.default = Flightrouter;
