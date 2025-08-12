"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ControllerTes_1 = require("../controller/ControllerTes");
const express_1 = require("express");
const TesteRoutes = (0, express_1.Router)();
TesteRoutes.get('/testenv', ControllerTes_1.TestController);
exports.default = TesteRoutes;
