import { Router } from "express";

const router = Router()

import {
    createProduct,
    getProducts,
    getProductById,
    deteteProductById,
    updateProductById,
    
} from '../controllers/productController.js'

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.delete('/:id', deteteProductById)
router.put('/:id', updateProductById)

export default router