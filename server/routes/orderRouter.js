import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router()

import { createOrder, getMyOrders, deleteOrderById, getOrdersByUserId} from '../controllers/orderController.js'
import adminMiddleware from "../middlewares/adminMiddleware.js";

router.post('/', authMiddleware, createOrder)
router.get('/my', authMiddleware, getMyOrders)
// router.get('/my', authMiddleware, )
// router.get('/my/:id', authMiddleware)

router.delete('/:id', authMiddleware, adminMiddleware, deleteOrderById)
router.get('/user/:id', authMiddleware, adminMiddleware, getOrdersByUserId)

export default router