import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "NEW"
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
})

export default Order