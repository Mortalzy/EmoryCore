import { Router } from "express";

const router = Router()

import {
    createProduct,
    getProducts,
    getProductById,
    deteteProductById,
} from '../controllers/productController.js'

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.delete('/:id', deteteProductById)

export default router