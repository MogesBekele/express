import express from 'express';

import LoginController from './controllers/loginController';

import RegisterController from './controllers/registerController';

const router = express.Router();

// GET request to get all users

router.get('/login', LoginController)
router.get('/register', RegisterController)

export default router;

