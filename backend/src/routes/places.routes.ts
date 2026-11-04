import { Router } from 'express';
import { placesController } from '../controllers/places.controller';

const router = Router();

router.get('/all', (req, res, next) => placesController.getAll(req, res, next));
router.get('/search', (req, res, next) => placesController.search(req, res, next));
router.get('/:name', (req, res, next) => placesController.getByName(req, res, next));
router.get('/', (req, res, next) => placesController.search(req, res, next));

export default router;

