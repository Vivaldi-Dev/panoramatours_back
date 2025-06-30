"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cityActivity_1 = require("../controller/cityActivity");
const routeractivities = (0, express_1.Router)();
routeractivities.get('/activities', cityActivity_1.getActivitiesByCity);
exports.default = routeractivities;
