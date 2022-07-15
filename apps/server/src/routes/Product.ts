import express from 'express';
import { ProductController } from '../controllers';
import { ProductMiddlewareValidator } from '../middleware';

const router = express.Router();

router.get('/:id', ProductController.getById);
router.get('/', ProductController.getAll);
router.post('/', ProductMiddlewareValidator.create, ProductController.create);
router.delete('/:id', ProductController.remove);

export default router;
