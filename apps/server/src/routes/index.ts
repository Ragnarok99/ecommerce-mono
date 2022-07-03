import express from 'express';

import productsRoutes from './Product';
import categoryRoutes from './Category';
import authRoutes from './Auth';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);
router.use('/products', productsRoutes);

export default router;
