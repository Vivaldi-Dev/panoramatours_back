import express from 'express';
import { reservarPacote } from '../controller/tourPackageEmailController';

const Reservasrouter = express.Router();

Reservasrouter.post('/reservas', reservarPacote);

export default Reservasrouter;