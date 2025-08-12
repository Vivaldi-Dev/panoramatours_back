import { Router } from 'express';

import { handleBooking } from '../controller/CarbookingController';

const CarEmail = Router ();

CarEmail.post('/carbooking', handleBooking);

export default CarEmail;



