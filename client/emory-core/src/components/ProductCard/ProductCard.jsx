import "./ProductCard.css"
import Button from "../Button/Button"
import Card from "../Card/Card"
import {Heart, ShoppingCart} from 'lucide-react'
import { useContext, useState } from "react"
import { BasketContext } from "../../context/BasketContext"
import { FavoriteContext } from "../../context/FavoriteContext"

const ProductCard = (props) => {
    const {
        product,
    } = props

    const {
        toggleBasket,
        isItemInBasket
    } = useContext(BasketContext)

    const {
        toggleFavorite,
        isFavorite,
    } = useContext(FavoriteContext)

    const iconSize = 30

    return (
        <div className="product">
            <Button className="product__basket-btn"
            onClick={() => {toggleBasket(product.id)}}
            >
                <ShoppingCart
                className={`basket-icon ${isItemInBasket(product.id) ? 'basket-icon--active' : ''}`} 
                size={iconSize}/>
            </Button>

            <Button className="product__favorite-btn"
            onClick={() => toggleFavorite(product)}
            >
                <Heart
                className={`favorite-icon ${isFavorite(product.id) ? 'favorite-icon--active' : ''}`}
                size={iconSize}/>
            </Button>
            
            <Card product={product}/>
        </div>
    )
}

export default ProductCard
