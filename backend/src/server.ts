import express, { Request, Response } from 'express';
import cors from 'cors';
import { config } from './config/env';
import apiRouter from './routes';
import { requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middlewares
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json());
app.use(requestLogger);

// Mount API routes
app.use('/api', apiRouter);

// Root info route
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'TripVista AI Travel Guide — Backend API',
    status: 'online',
    version: '1.0.0',
    documentation: '/api/health',
    endpoints: [
      'POST /api/trips/generate',
      'GET  /api/trips',
      'GET  /api/trips/:id',
      'POST /api/chat',
      'GET  /api/places',
      'GET  /api/places/:name',
      'GET  /api/weather?destination=...',
      'POST /api/rag/search',
      'GET  /api/health'
    ]
  });
});

// 404 Handler for undefined routes
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Endpoint ${req.method} ${req.originalUrl} not found`
  });
});

// Centralized Error Handler
app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  console.log(`====================================================`);
  console.log(`🚀 TripVista Express Backend Server running on port ${config.port}`);
  console.log(`   Health Check: http://localhost:${config.port}/api/health`);
  console.log(`   API Base URL: http://localhost:${config.port}/api`);
  console.log(`====================================================`);
});

export default app;
