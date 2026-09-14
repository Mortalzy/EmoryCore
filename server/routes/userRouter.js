import { Router } from "express";
const router = Router()

import {getMyProfile} from '../controllers/userController.js'
import authMiddleware from "../middlewares/authMiddleware.js";

router.get('/', authMiddleware, getMyProfile)

export default router