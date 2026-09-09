import { Router } from "express";

const router = Router()

import {
    register,
    login,
    getUsers
} from '../controllers/authController.js'

import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

// router.get('/users', authMiddleware, adminMiddleware, getUsers)
router.get('/users', authMiddleware, adminMiddleware, getUsers)
router.post('/register', register)
router.post('/login', login)

export default router