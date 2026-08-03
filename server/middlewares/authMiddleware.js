import jwt from 'jsonwebtoken'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if(!authHeader) {
            return res.status(500).json({message: "Токен отсутствует"})
        }

        const token = authHeader.split(' ')[1]

        if(!token) {
            return res.status(500).json({message: "Токен отсутствует"})
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = decoded

        next()
        }
    catch (error) {
            res.status(500).json({error: error.message})
        }   
}

export default authMiddleware