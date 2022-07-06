import express from 'express';
import { ColorController } from '../controllers';

const router = express.Router();

router.post('/', ColorController.create);

export default router;
