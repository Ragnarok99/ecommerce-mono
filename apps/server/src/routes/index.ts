import express from 'express';

import productsRoutes from './Product';
import categoryRoutes from './Category';
import authRoutes from './Auth';
import colorRoutes from './Color';
import sizeRoutes from './Size';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);
router.use('/color', colorRoutes);
router.use('/products', productsRoutes);
router.use('/size', sizeRoutes);

export default router;
