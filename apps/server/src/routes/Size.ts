import express from 'express';
import { SizeController } from '../controllers';

const router = express.Router();

router.post('/', SizeController.create);

export default router;
