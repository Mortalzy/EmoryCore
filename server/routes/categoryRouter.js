import { Router } from "express";

const router = Router()

import {
    getCategories, 
    getCategoryById, 
    createCategory, 
    deleteCategoryById, 
    updateCategoryById
} from '../controllers/categoryController.js'
import authMiddleware from "../middlewares/authMiddleware.js";
import adminMiddleware from "../middlewares/adminMiddleware.js";

router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.post('/', authMiddleware, adminMiddleware, createCategory)
router.put('/:id', authMiddleware, adminMiddleware, updateCategoryById)
router.delete('/:id', authMiddleware, adminMiddleware, deleteCategoryById)

export default router