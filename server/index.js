import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import sequelize from './db.js'
import {Product, User} from './models/index.js'

const app = express()

const PORT = process.env.PORT || 3212

app.use(express.json())
app.use(cors())

import productRouter from './routes/productRouter.js'
import authRouter from './routes/authRouter.js'

app.use('/api/products', productRouter)
app.use('/api/auth', authRouter)

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
