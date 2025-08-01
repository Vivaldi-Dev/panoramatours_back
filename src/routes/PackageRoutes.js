"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tourPackageController_1 = require("../controller/tourPackageController");
const upload_1 = require("../middleware/upload");
const PackageRouter = express_1.default.Router();
PackageRouter.post('/packages', upload_1.upload.array('photos'), tourPackageController_1.createTourPackage);
PackageRouter.get('/packages', tourPackageController_1.getAllTourPackages);
PackageRouter.get('/packages/:id', tourPackageController_1.getTourPackageById);
PackageRouter.delete('/packages/:id', tourPackageController_1.deleteTourPackage);
exports.default = PackageRouter;
