import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,  
    },

    description: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
})

export default Product