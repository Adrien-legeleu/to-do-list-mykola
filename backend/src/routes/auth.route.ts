import express from 'express';
import { authController } from '../controllers'

const authRouter = express.Router();

authRouter
    .post('/login', authController.login)
    .post("/register", authController.register)

export default authRouter;