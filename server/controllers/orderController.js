import {OrderItem, Order, Basket, BasketItem, Product, User} from '../models/index.js'

const createOrder = async (req, res) => {
    try {

        const user_id = req.user.user_id
        if (!user_id) {
            return res.status(404).json({message: "Пользователь не авторизован"})
        }

        const userBasket = await Basket.findOne({where: {user_id: user_id}})
        if (!userBasket) {
            return res.status(404).json({message: "Корзина пользователя не найдена"})
        }
        
        const basketItems = await BasketItem.findAll({
            where: { basket_id: userBasket.id },
            include: [{
                model: Product,
                as: 'product',
            }]
        })
        if (basketItems.length === 0) {
            return res.status(400).json({message: "Корзина пользователя пуста"})
        }

        const orderTotalPrice = basketItems.reduce( (accum, item) => {
            return accum + item.product.price * item.count 
        }, 0)

        const order = await Order.create({
            user_id: user_id,
            status: "NEW",
            total_price: orderTotalPrice,
        })

        for (let item of basketItems) {
            await OrderItem.create({
                order_id: order.id,
                product_id: item.product.id,
                name: item.product.name,
                price: item.product.price,
                count: item.count,
                total_price: item.product.price * item.count,
            })
        }

        const orderWithItems = await Order.findByPk(order.id, {
            include: [{
                model: OrderItem,
                as: 'order_items',

                include: [{
                    model: Product,
                    as: "product",
                }]
            }]
        }) 
        
        // Надо еще очищать корзину после оформления заказа

        res.status(200).json(orderWithItems)


    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getMyOrders = async (req, res) => {
    try {
        const user_id = req.user.user_id
        if (!user_id) {
            return res.status(404).json({message: "Пользователь не авторизован"})
        }

        const userOrders = await Order.findAll(
            {
                where: {user_id: user_id},
                include: [{
                    model: OrderItem,
                    as: "order_items"
                }]
            })

        res.status(200).json(userOrders)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteOrderById = async (req, res) => {
    try {
        const order_id = req.params.id

        const order = await Order.findByPk(order_id)
        if(!order) {
            return res.status(404).json({message: "Не найден заказ"})
        }

        await OrderItem.destroy({where: {order_id: order.id}})
        await order.destroy()

        res.status(200).json(order)
    } catch(error) {

    }
}

const deleteAllOrdersByUserId = async (req, res) => {
    try {

    } catch (error) {

    }
}

const getAllOrders = async (req, res) => {
    try {

    } catch (error) {

    }
}

const getOrdersByUserId = async (req, res) => {
    try {
        const user_id = req.params.id

        const user = await User.findByPk(user_id)
        if(!user) {
            return res.status(404).json({message: "Пользователь с заданным id не найден"})
        }

        const orders = await Order.findAll(
            {
                where: {user_id: user.id},
                include: [{
                    model: OrderItem,
                    as: "order_items"
                }]
            })
        if(!orders) {
            res.status(404).json({message: "Заказы пользователя не найдены"})
        }

        res.status(200).json(orders)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}



export {
    createOrder,
    getMyOrders,
    getOrdersByUserId,
    deleteOrderById,
}