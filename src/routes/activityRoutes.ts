import express from 'express';
import { createActivity, getActivities ,getActivityById} from '../controller/activityController';
import { upload } from '../middleware/upload';

const Routeractivities = express.Router();

Routeractivities.post('/actidades',upload.array('photos'),createActivity);
Routeractivities.get('/actidades', getActivities);
Routeractivities.get('/activities/:id', getActivityById);

export default Routeractivities;
