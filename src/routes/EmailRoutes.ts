import express from 'express';
import { createBooking } from '../controller/bookingController';

const Emailrouter = express.Router();
Emailrouter.post('/send-booking', createBooking);

export default Emailrouter;
