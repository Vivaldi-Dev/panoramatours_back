import { Router } from 'express';

import { getActivitiesByCity } from "../controller/cityActivity";

const routeractivities = Router();

routeractivities.get('/activities', getActivitiesByCity);

export default routeractivities;


