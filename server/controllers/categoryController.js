
import { Category, Product } from '../models/index.js';

const createCategory = async (req, res) => {
    try {
        console.log(req.body)

        const {
            name,
            description,
            imageUrl,
        } = req.body

        const candidate = await Category.findOne({where: {name: name}})

        if (candidate) {
            return res.status(500).json({message: "Категория с таким названием уже существует"})
        }

        const category = await Category.create({
            name: name,
            description: description,
            imageUrl: imageUrl,
        })

        res.status(200).json(category)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll()

        res.status(200).json(categories)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id

        const category = await Category.findByPk(id)

        if(!category) {
            return res.status(404).json({message: "Категория с выбранным id не найдена"})
        }

        res.status(200).json(category)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

const deleteCategoryById = async (req, res) => {
    try {
        const id = req.params.id

        const category = await Category.findByPk(id)

        if(!category) {
            return res.status(404).json({message: "Категория с выбранным id не найдена"})
        }

        const noname_category = await Category.findOrCreate({
            where: {name: "Без названия"}
        })

        const linked_products = await Product.findAll({
            where: {category_id: id}
        })

        for (const product of linked_products) {
            await product.update({
                category_id: noname_category.id 
            })
        }

        await category.destroy()

        res.status(200).json(category)
    }

    catch(error) {
        res.status(500).json({message: error.message})
    }
}

const updateCategoryById = async (req, res) => {
    try {
        const id = req.params.id
        const {
            name,
            description,
            imageUrl,
        } = req.body

        const category = await Category.findByPk(id)

        if(!category) {
            return res.status(404).json({message: "Категория с выбранным id не найдена"})
        }

        const updatedCategory = await category.update({
            name: name,
            description: description,
            imageUrl: imageUrl,
        })

        res.status(200).json(updatedCategory)

    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
}

export {
    createCategory,
    getCategories,
    getCategoryById,
    deleteCategoryById,
    updateCategoryById
}