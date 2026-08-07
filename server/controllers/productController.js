import { Product } from "../models/index.js";

const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            imageUrl,
            price,
        } = req.body
        
        const product = await Product.create({
            name,
            description,
            imageUrl,
            price,
        })

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(
            {   
                message: "Ошибка создании товара",
                error: error.message
            })
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(
            {   
                message: "Ошибка получения товаров",
                error: error.message
            })
    }
} 

const getProductById = async (req, res) => {
    try {
        const id = req.params.id

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({message: "Продукт с заданным id отсутствует"})
        }

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(
            {
                message: "Ошибка получения товара по ID",
                error: error.message
        })
    }
    
}

const deteteProductById = async (req, res) => {
    try {
        const id = req.params.id

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(500).json({message: "Продукт с заданным id отсутствует"})
        }

        await product.destroy()

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(
            {   
                message: "Ошибка удаления товара",
                error: error.message
            })
    }
}

const updateProductById = async (req, res) => {
    try {
        const id = req.params.id

        const {
            name,
            description,
            imageUrl,
            price,
            
        } = req.body

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(500).json({message: "Продукт с заданным id отсутствует"})
        }

        const updatedProduct = await product.update({
            name: name, 
            description: description, 
            imageUrl: imageUrl, 
            price: price
        })

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(
            {   
                message: "Ошибка удаления товара",
                error: error.message
            })
    }
}

export {
    createProduct,
    getProducts,
    getProductById,
    deteteProductById,
    updateProductById
}