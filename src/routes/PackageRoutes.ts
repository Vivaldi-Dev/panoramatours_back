import express from 'express';
import { createTourPackage,getAllTourPackages,getTourPackageById,deleteTourPackage } from '../controller/tourPackageController';
import multer from 'multer';
import { upload } from '../middleware/upload';



const PackageRouter = express.Router();

PackageRouter.post('/packages', upload.array('photos'), createTourPackage);
PackageRouter.get('/packages', getAllTourPackages);
PackageRouter.get('/packages/:id', getTourPackageById);
PackageRouter.delete('/packages/:id', deleteTourPackage);

export default PackageRouter;

