import jwt from 'jsonwebtoken'

const generateJWT = (user_id, email, role) => {
    const data = {user_id, email, role}

    const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
        expiresIn: '8h'
    })

    return token
}

export { 
    generateJWT
}