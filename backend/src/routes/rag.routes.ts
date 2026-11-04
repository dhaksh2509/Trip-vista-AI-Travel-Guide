import { Router } from 'express';
import { ragController } from '../controllers/rag.controller';

const router = Router();

router.post('/search', (req, res, next) => ragController.search(req, res, next));
router.post('/ingest', (req, res, next) => ragController.ingest(req, res, next));

export default router;

