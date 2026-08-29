import { Category, Product } from "../models/index.js";

const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            category_id,
            imageUrl,
            price,
        } = req.body
        
        const product = await Product.create({
            name,
            description,
            category_id,
            imageUrl,
            price,
        })

        const category = await Category.findByPk(category_id)

        if(!category) {
            return res.status(404).json({message: "Категория с заданным id не найдена"})
        }

        const productWithCategory = await Product.findByPk(product.id, {
            include: [{
                    model: Category,
                    as: 'category'
                }]
        })

        res.status(200).json(productWithCategory)
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
        const products = await Product.findAll({
            include: [{
                model: Category,
                as: "category",
            }]
        })

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

        const product = await Product.findByPk(id, {
            include: [{
                model: Category,
                as: 'category'
            }]
        })

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
            category_id,
            imageUrl,
            price,
            
        } = req.body

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(500).json({message: "Продукт с заданным id отсутствует"})
        }

        const category = await Category.findByPk(category_id)

        if(!category) {
            return res.status(404).json({message: "Категория с заданным id не найдена"})
        }

        await product.update({
            name: name, 
            description: description, 
            imageUrl: imageUrl, 
            price: price,
            category_id: category_id,            
        })

        const updatedProduct = await Product.findByPk(product.id, {
            include: [{
                model: Category,
                as: 'category'
            }]
        })

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json(
            {   
                message: "Ошибка обновления товара",
                error: error.message
            })
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const id = req.params.id

        const category = await Category.findByPk(id)

        if(!category) {
            return res.status(404).json({message: "Категория с заданным id не найдена"})
        }

        const product = await Product.findAll({
            where: {
                category_id: id
            }
        })

        res.status(200).json(product)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

export {
    createProduct,
    getProducts,
    getProductById,
    getProductsByCategory,
    deteteProductById,
    updateProductById,
}