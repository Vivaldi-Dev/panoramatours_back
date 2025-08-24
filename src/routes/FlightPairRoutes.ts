import express from 'express';
import { createFlightPair, searchAllFlights, searchLocalFlights } from '../controller/FlightPairController';


const Flightrouter = express.Router();

Flightrouter.post('/post-booking', createFlightPair);
Flightrouter.get('/search/LocalFlight', searchLocalFlights);
Flightrouter.post('/search-all-flights', searchAllFlights);



export default Flightrouter;
