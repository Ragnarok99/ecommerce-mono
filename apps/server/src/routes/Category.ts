import express from 'express';
import { CategoryController } from '../controllers';

const router = express.Router();

router.post('/', CategoryController.create);

export default router;
