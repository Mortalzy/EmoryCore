import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const BasketItem = sequelize.define("basket_item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    basket_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
    }

})

export default BasketItem