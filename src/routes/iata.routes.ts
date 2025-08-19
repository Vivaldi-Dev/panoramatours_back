import express from "express";

import { createIATACode, deleteAllIATACodes, getIATACodes, suggestIATACodes } from "../controller/iata.controller";

const iatarouter = express.Router();

iatarouter.post("/iata", createIATACode);
iatarouter.get("/iata", getIATACodes);
iatarouter.get("/iata/suggest", suggestIATACodes);
iatarouter.delete("/all" , deleteAllIATACodes)

export default iatarouter;
