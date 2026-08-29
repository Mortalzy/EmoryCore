import {Favorite, Product, User} from '../models/index.js'

const addFavorite = async (req, res) => {
    try {
        const {
            product_id,
        } = req.body

        console.log(req.user)

        const user_id = req.user.user_id

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(404).json({message: "Пользователь с заданным id не найден"})
        }

        const product = await Product.findByPk(product_id)

        if (!product) {
            return res.status(404).json({message: "Продукт с заданным id не найден"})
        }

        const candidate = await Favorite.findOne({where: {
            product_id: product_id,
            user_id: user_id,
        }
    })

        if (candidate) {
            return res.status(500).json({message: "Товар с данным id уже добавлен в избранное"})
        }

        const favorite = await Favorite.create({
            user_id: user_id,
            product_id: product_id,
        })

        const favoriteWithFullInfo = await Favorite.findByPk(favorite.id, {
            include: [{
                model: Product,
                as: "product",
            }]
        })

        res.status(200).json(favoriteWithFullInfo)
    }

    catch (error) {
        res.status(500).json({message: "Ошибка добавления товара в избранное"})
    }
}

const removeFavorite = async (req, res) => {
    try {
        const id = req.params.id

        const favorite = await Favorite.findByPk(id)
        
        if (!favorite) {
            return res.status(404).json({message: "Избранный товар с заданным id не найден"})
        }

        await favorite.destroy()

        res.status(200).json(favorite)
    }

    catch (error) {
        res.status(500).json({message: "Ошибка удаления товара из избранного"})
    }
}

const getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.findAll({
            include: [{
                model: Product,
                as: "product"
            }]
        })

        res.status(200).json(favorites)
    }

    catch (error) {
        res.status(500).json({message: "Ошибка получения избранных товаров"})
    }
}

export {
    addFavorite,
    removeFavorite, 
    getFavorites,
}

