/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const adminMiddleware = (req, res, next) => {
    try {
        if(!req.user) {
            return res.status(500).json({message: "Отсутствуют данные пользователя"})
        }

        if (req.user.role !== "ADMIN") {
            return res.status(500).json({message: "Пользователь не обладает достаточными правами"})
        }

        next()
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

export default adminMiddleware