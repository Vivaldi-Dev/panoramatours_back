import express from "express";
import multer from "multer";

import path from "path";
import { createCar, listCars, findCarByName } from "../controller/carController";

const carRoutes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "src/uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

carRoutes.post("/cars", upload.single("image"), createCar);
carRoutes.get("/cars", listCars);
carRoutes.get('/cars/find', findCarByName);

export default carRoutes;
