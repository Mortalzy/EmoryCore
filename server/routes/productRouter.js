import { Router } from "express";

const router = Router()

import {
    createProduct,
    getProducts,
    getProductById,
    getProductsByCategory,
    deteteProductById,
    updateProductById,
    
} from '../controllers/productController.js'
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";


router.get('/', getProducts)
router.get('/:id', getProductById)
router.get('/category/:id', getProductsByCategory)

router.post('/', authMiddleware, adminMiddleware, createProduct)
router.delete('/:id', authMiddleware, adminMiddleware, deteteProductById)
router.put('/:id', authMiddleware, adminMiddleware, updateProductById)

export default router