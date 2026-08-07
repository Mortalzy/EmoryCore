import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,  
    },

    description: {
        type: DataTypes.STRING,
    },

    imageUrl: {
        type: DataTypes.STRING,
    },

    price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    
})

export default Product