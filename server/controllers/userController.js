import { User } from "../models/index.js"

const getMyProfile = async (req, res) => {
    try {
        const user_id = req.user.user_id
        if(!user_id) {
            return res.status(404).json({message: "Пользователь не авторизован"})
        }

        const user = await User.findByPk(user_id, {
            attributes: {
                exclude: ['password']
            }
        })
        if(!user) {
            return res.status(404).json({message: "Пользователь с заданным id не найден"})
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

export {
    getMyProfile
}