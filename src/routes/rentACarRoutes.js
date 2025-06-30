"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RentACarController_1 = require("../controller/RentACarController");
const Rentrouter = (0, express_1.Router)();
Rentrouter.post('/rent', RentACarController_1.RentACarController.create);
Rentrouter.get('/rent', RentACarController_1.RentACarController.list);
exports.default = Rentrouter;
