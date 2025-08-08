"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookingController_1 = require("../controller/bookingController");
const CarbookingController_1 = require("../controller/CarbookingController");
const Emailrouter = express_1.default.Router();
Emailrouter.post('/send-booking', bookingController_1.createBooking);
Emailrouter.post('/send-carbooking', CarbookingController_1.handleBooking);
Emailrouter.post('/sendcarbooking', CarbookingController_1.handleBooking);
exports.default = Emailrouter;
