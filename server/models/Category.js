import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define('category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    description: {
        type: DataTypes.STRING,
    },

    imageUrl: {
        type: DataTypes.STRING,
    }
})

export default Category