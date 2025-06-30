import { Router } from 'express';
import { RentACarController } from '../controller/RentACarController';
const Rentrouter = Router();

Rentrouter.post('/rent', RentACarController.create);

Rentrouter.get('/rent', RentACarController.list);

export default Rentrouter;