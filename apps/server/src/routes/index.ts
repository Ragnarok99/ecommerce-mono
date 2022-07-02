import express from 'express';

import productsRoutes from './Product';
import categoryRoutes from './Category';

const router = express.Router();

router.use('/products', productsRoutes);
router.use('/category', categoryRoutes);

export default router;
