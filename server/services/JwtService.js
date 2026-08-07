import jwt from 'jsonwebtoken'

const generateJWT = (userId, email, role) => {
    const data = {userId, email, role}

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: '8h'
    })

    return token
}

export { 
    generateJWT
}