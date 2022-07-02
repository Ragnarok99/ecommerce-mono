import express from 'express';
import { ProductController } from '../controllers';

const router = express.Router();

router.get('/:id', ProductController.getById);
router.get('/', ProductController.getAll);
router.post('/', ProductController.create);
router.delete('/:id', ProductController.remove);

export default router;
