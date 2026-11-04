import { Router } from 'express';
import tripsRoutes from './trips.routes';
import chatRoutes from './chat.routes';
import placesRoutes from './places.routes';
import weatherRoutes from './weather.routes';
import ragRoutes from './rag.routes';

const router = Router();

// Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'TripVista AI Travel Guide Backend REST Server',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

router.use('/trips', tripsRoutes);
router.use('/chat', chatRoutes);
router.use('/places', placesRoutes);
router.use('/weather', weatherRoutes);
router.use('/rag', ragRoutes);

export default router;

