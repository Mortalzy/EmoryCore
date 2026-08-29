import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Favorite = sequelize.define('favorite', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Favorite