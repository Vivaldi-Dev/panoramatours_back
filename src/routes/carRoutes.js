"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const carController_1 = require("../controller/carController");
const carRoutes = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => cb(null, "src/uploads"),
    filename: (req, file, cb) => cb(null, Date.now() + path_1.default.extname(file.originalname)),
});
const upload = (0, multer_1.default)({ storage });
carRoutes.post("/cars", upload.single("image"), carController_1.createCar);
carRoutes.get("/cars", carController_1.listCars);
carRoutes.get('/cars/find', carController_1.findCarByName);
exports.default = carRoutes;
