import { Router } from 'express';
import { weatherController } from '../controllers/weather.controller';

const router = Router();

router.get('/', (req, res, next) => weatherController.getWeather(req, res, next));

export default router;

