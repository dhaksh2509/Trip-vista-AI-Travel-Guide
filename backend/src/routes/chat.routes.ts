import { Router } from 'express';
import { chatController } from '../controllers/chat.controller';
import { validateChatMessage } from '../middleware/validator';

const router = Router();

router.post('/', validateChatMessage, (req, res, next) => chatController.sendMessage(req, res, next));

export default router;

