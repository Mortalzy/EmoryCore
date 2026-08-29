import Product from "./Product.js";
import User from "./User.js";
import Category from "./Category.js";
import Favorite from "./Favorite.js";

Category.hasMany(Product, {
    foreignKey: "category_id",
    as: "products",
})

Product.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category",
})

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    as: "favorites",
})

Favorite.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
})

Product.hasMany(Favorite, {
    foreignKey: "product_id",
    as: 'favorites'
})

Favorite.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
})



export {
    Product,
    User,
    Category,
    Favorite
}