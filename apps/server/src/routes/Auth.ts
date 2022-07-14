import express from 'express';

import { AuthController } from '../controllers';
import { AuthMiddlewareValidator } from '../middleware';

const router = express.Router();

router.post('/signup', AuthMiddlewareValidator.signup, AuthController.signup);
router.post('/login', AuthController.login);

export default router;
