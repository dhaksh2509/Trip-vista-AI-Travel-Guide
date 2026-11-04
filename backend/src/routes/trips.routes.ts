import { Router } from 'express';
import { tripsController } from '../controllers/trips.controller';
import { validateTripPreferences } from '../middleware/validator';

const router = Router();

router.post('/generate', validateTripPreferences, (req, res, next) => tripsController.generate(req, res, next));
router.post('/', validateTripPreferences, (req, res, next) => tripsController.generate(req, res, next));
router.get('/', (req, res, next) => tripsController.getAll(req, res, next));
router.get('/:id', (req, res, next) => tripsController.getById(req, res, next));
router.delete('/:id', (req, res, next) => tripsController.delete(req, res, next));

export default router;

