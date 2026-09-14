import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import sequelize from './db.js'


const app = express()

const PORT = process.env.PORT || 3212

app.use(express.json())
app.use(cors())

import productRouter from './routes/productRouter.js'
import authRouter from './routes/authRouter.js'
import categoryRouter from './routes/categoryRouter.js'
import favoriteRouter from './routes/favoriteRouter.js'
import basketRouter from './routes/basketRouter.js'
import orderRouter from './routes/orderRouter.js'
import userRouter from './routes/userRouter.js'

app.use('/api/products', productRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/auth', authRouter)
app.use('/api/favorites', favoriteRouter)
app.use('/api/basket', basketRouter)
app.use('/api/order', orderRouter)
app.use('/api/user', userRouter)


const start = async () => {
    try {
        await sequelize.authenticate()
        console.log("Подключено к БД");
        

        await sequelize.sync({alter: true})
        console.log('Таблицы синхронизированы');
        

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error.message);    
    }
}

start()
