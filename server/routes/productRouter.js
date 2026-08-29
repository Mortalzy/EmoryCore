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

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)

router.get('/category/:id', getProductsByCategory)

router.delete('/:id', deteteProductById)
router.put('/:id', updateProductById)

export default router