"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activityController_1 = require("../controller/activityController");
const upload_1 = require("../middleware/upload");
const Routeractivities = express_1.default.Router();
Routeractivities.post('/actidades', upload_1.upload.array('photos'), activityController_1.createActivity);
Routeractivities.get('/actidades', activityController_1.getActivities);
Routeractivities.get('/activities/:id', activityController_1.getActivityById);
exports.default = Routeractivities;
