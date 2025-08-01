import express from "express";
import { createLocation ,getLocations} from "../controller/LocationController";

const RouterLocations = express.Router();

RouterLocations.post("/locations", createLocation);
RouterLocations.get("/locations", getLocations);

export default RouterLocations;
