import express from 'express';
import { ColorController } from '../controllers';
import { ColorMiddlewareValidator } from '../middleware';

const router = express.Router();

router.post('/', ColorMiddlewareValidator.create, ColorController.create);

export default router;
