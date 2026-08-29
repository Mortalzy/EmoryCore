import { Router } from "express";

const router = Router()

import {
    addFavorite,
    removeFavorite,
    getFavorites
} from '../controllers/favoriteController.js'

import authMiddleware from '../middlewares/authMiddleware.js'

router.post('/', authMiddleware, addFavorite)
router.delete('/:id', authMiddleware, removeFavorite)
router.get('/', authMiddleware, getFavorites)

export default router