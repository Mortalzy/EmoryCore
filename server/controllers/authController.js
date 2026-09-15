import {Basket, User} from '../models/index.js'
import bcrypt from 'bcrypt'
import { generateJWT } from '../services/JwtService.js'

const register = async (req, res) => {
    try {
        const {
            first_name,
            second_name,
            password,
            email
        } = req.body

        if (!first_name || !second_name || !password || !email) {
            return res.status(400).json({message: "Заполните все данные"})
        }

        const candidate = await User.findOne({where: {
            email: email
        }})

        if (candidate) {
            return res.status(409).json({message: "Пользователь с таким email существует"})
        }

        const password_hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            first_name,
            second_name,
            password: password_hash,
            email
        })

        const token = generateJWT(user.id, user.email, user.role)

        const basket = await Basket.findOrCreate({
            where: {user_id: user.id}
        })

        return res.status(201).json({
            first_name: user.first_name,
            second_name: user.second_name,
            email: user.email,
            token,
        })


    } catch (error) {
        return res.status(500).json(
            {
                message: "Ошибка регистрации",
                error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const {
            password,
            email
        } = req.body

        if (!password || !email) {
            return res.status(400).json({message: "Заполните все данные"})
        }

        const user = await User.findOne({where: {
            email: email
        }})

        if(!user) {
            return res.status(404).json({message: "Пользователя с такой почтой не существует"})
        }

        const passwordValidation = await bcrypt.compare(password, user.password)

        if (!passwordValidation) {
            return res.status(401).json({message: "Неверный пароль!"})
        }

        const token = generateJWT(user.id, user.email, user.role)

        const basket = await Basket.findOrCreate({where: {user_id: user.id}})

        return res.status(200).json({
            id: user.id,
            first_name: user.first_name,
            second_name: user.second_name,
            email: user.email,
            role: user.role,
            token: token,
        })
    } catch (error) {
        return res.status(500).json(
            {
                message: "Ошибка логинизации",
                error: error.message
            })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll()

        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(
            {
                message: "Ошибка получения списка пользователей",
                error: error.message
            })
    }
}

export {
    register,
    login,
    getUsers
}