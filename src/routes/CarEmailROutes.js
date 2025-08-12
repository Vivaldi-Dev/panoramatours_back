"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarbookingController_1 = require("../controller/CarbookingController");
const CarEmail = (0, express_1.Router)();
CarEmail.post('/carbooking', CarbookingController_1.handleBooking);
exports.default = CarEmail;
