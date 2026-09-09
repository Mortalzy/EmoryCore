import { log } from "node:console"
import { Basket, BasketItem, Product,  } from "../models/index.js"

const getBasket = async (req, res) => {
    try {
        console.log("req.user: ", req.user);
        
        
        const user_id = req.user.user_id

        const basket = await Basket.findOne({
            where: {user_id: user_id},
            include: [{
                model: BasketItem,
                as: 'basket_items',
                include: [{
                    model: Product,
                    as: "product"
                }]
            }]
        })

        res.status(200).json(basket)
    } catch (error) {
        console.log(req.user);
        
        res.status(500).json({message: error.message})
    }
    
}

const addToBasket = async (req, res) => {
    try {
        const {
            product_id,
        } = req.body

        const user_id = req.user.user_id
        const basket = await Basket.findOne({where: {user_id: user_id}})
        if(!basket) {
            return res.status(404).json({message: "Корзина с заданным id пользователя не найдена"})
        }

        const product = await Product.findByPk(product_id)
        if(!product) {
            return res.status(404).json({message: "Товар с заданным id не найден"})
        }

        const candidate = await BasketItem.findOne(
            {
                where: {
                    product_id: product_id,
                    basket_id: basket.id,
                }})
        if(candidate) {
            return res.status(403).json({message: "Товар уже добавлен в корзину"})
        }

        const basketItem = await BasketItem.create({
            product_id: product_id,
            basket_id: basket.id,
        })

        const basketItemWithProduct = await BasketItem.findByPk(basketItem.id, {
            include: [{
                model: Product,
                as: "product"
            }]
        })

        res.status(200).json(basketItemWithProduct) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
       

}

const deleteFromBasket = async (req, res) => {
    try {
        const product_id = req.params.id
        const user_id = req.user.user_id

        const basket = await Basket.findOne({where: {user_id: user_id}})
        if(!basket) {
            return res.status(404).json({message: "Не найдена корзина пользователя"})
        }

        const basketItem = await BasketItem.findOne({where: {
            basket_id: basket.id,
            product_id: product_id,
        }})
        if(!basketItem) {
            return res.status(404).json({message: "Basket Item не найден для удаления!"})
        } 

        await basketItem.destroy()

        res.status(200).json(basketItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateBasketItem = async (req, res) => {
    try {
        const product_id = req.params.id
        const user_id = req.user.user_id
        const {
            count
        } = req.body

        if (count <= 0) {
            return res.status(400).json({message: "Количество продука должно быть больше 0"})
        }

        const basket = await Basket.findOne({where: {user_id: user_id}})
        if(!basket) {
            return res.status(404).json({message: "Не найдена корзина пользователя"})
        }

        const basketItem = await BasketItem.findOne({where: {
            basket_id: basket.id,
            product_id: product_id,
        }})
        if(!basketItem) {
            return res.status(404).json({message: "Basket Item не найден для удаления!"})
        }
        
        const updatedBasketItem = await basketItem.update({
            count: count,
        })

        const updatedWithProduct = await BasketItem.findByPk(updatedBasketItem.id, {
            include: [{
                model: Product,
                as: "product"
            }]
        })

        res.status(200).json(updatedWithProduct)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

export {
    getBasket,
    addToBasket,
    deleteFromBasket,
    updateBasketItem,
}
