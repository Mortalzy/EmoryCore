
import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const OrderItem = sequelize.define('order_item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

export default OrderItem