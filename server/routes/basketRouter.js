import {Router} from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import {getBasket, addToBasket, deleteFromBasket, updateBasketItem} from '../controllers/basketController.js'

const router = Router()

router.get('/', authMiddleware,getBasket)
router.post('/', authMiddleware, addToBasket)
router.delete('/:id', authMiddleware, deleteFromBasket)
router.put('/:id', authMiddleware, updateBasketItem)

export default router