import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: process.env.NAME_DB,
    password: process.env.PASSWORD_DB,
    username: process.env.USERNAME_DB,
    host: process.env.HOSTNAME_DB,
    port: process.env.PORT_DB,
    logging: false,
})

export default sequelize