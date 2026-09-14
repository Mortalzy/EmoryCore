import Product from "./Product.js";
import User from "./User.js";
import Category from "./Category.js";
import Favorite from "./Favorite.js";
import Basket from "./Basket.js";
import BasketItem from "./BasketItem.js";
import Order from "./Order.js";
import OrderItem from "./OrderItem.js";

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


// User ↔ Basket (один к одному)
User.hasOne(Basket, {
    foreignKey: 'user_id',
    as: 'basket',          // ← user.basket
})

Basket.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user',            // ← basket.user
})

// Basket ↔ BasketItem (один ко многим)
Basket.hasMany(BasketItem, {
    foreignKey: 'basket_id',
    as: 'basket_items',           // ← basket.items
})

BasketItem.belongsTo(Basket, {
    foreignKey: 'basket_id',
    as: 'basket',          // ← basketItem.basket
})

// Product ↔ BasketItem (один ко многим)
Product.hasMany(BasketItem, {
    foreignKey: 'product_id',
    as: 'basket_items',     // ← product.basketItems
})

BasketItem.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product',         // ← basketItem.product
})

// User -> Order
User.hasMany(Order, {
    foreignKey: "user_id",
    as: "orders",
});

Order.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
});


// Order -> OrderItem
Order.hasMany(OrderItem, {
    foreignKey: "order_id",
    as: "order_items",
});

OrderItem.belongsTo(Order, {
    foreignKey: "order_id",
    as: "order",
});


// Product -> OrderItem
Product.hasMany(OrderItem, {
    foreignKey: "product_id",
    as: "order_items",
});

OrderItem.belongsTo(Product, {
    foreignKey: "product_id",
    as: "product",
});

export {
    Product,
    User,
    Category,
    Favorite,
    Basket,
    BasketItem,
    Order,
    OrderItem,
}