import express from 'express';

import productsRoutes from './Product';

const router = express.Router();

router.use('/products', productsRoutes);

export default router;
