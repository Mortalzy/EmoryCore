import { Router } from "express";

const router = Router()

import {
    getCategories, 
    getCategoryById, 
    createCategory, 
    deleteCategoryById, 
    updateCategoryById
} from '../controllers/categoryController.js'

router.get('/', getCategories)
router.get('/:id', getCategoryById)
router.post('/', createCategory)
router.put('/:id', updateCategoryById)
router.delete('/:id', deleteCategoryById)

export default router