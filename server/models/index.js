import Product from "./Product.js";
import User from "./User.js";
import Category from "./Category.js";

Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "products",
})

Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category",
})

export {
    Product,
    User,
    Category,
}