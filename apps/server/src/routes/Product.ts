import express from 'express';
import { ProductControllers } from '../controllers';

const router = express.Router();

router.get('/', ProductControllers.getAll);
router.post('/create', ProductControllers.create);

export default router;
