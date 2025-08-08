import express from 'express';
import { createBooking } from '../controller/bookingController';
import { handleBooking } from '../controller/CarbookingController';

const Emailrouter = express.Router();

Emailrouter.post('/send-booking', createBooking);

Emailrouter.post('/send-carbooking', handleBooking);

Emailrouter.post('/sendcarbooking', handleBooking);

export default Emailrouter;
