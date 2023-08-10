import express, {Router} from 'express';
const router = express.Router();

import {
    signup,
    login,
    refresh
} from '../controllers/authController';

// Middleware to validate password
import validatePassword from '../middleware/passwordValidator';

router.post('/signup', validatePassword, signup);
router.post('/login', login);
router.post('/refresh', refresh);

export default router;