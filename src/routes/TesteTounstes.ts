import { TestController } from "../controller/ControllerTes";


import { Router } from "express";

const TesteRoutes = Router();

TesteRoutes.get('/testenv', TestController);

export default TesteRoutes;