import "./ProductCard.css"
import Button from "../Button/Button"
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder"
import {Heart, ShoppingCart} from 'lucide-react'
import { useState } from "react"

const ProductCard = (props) => {
    const {
        product,
        isFavorite,
        toggleFavorite,
        isItemInBasket,
        toggleBasket,
    } = props

    const [imgError, setImgError] = useState(false)

    const iconSize = 30

    return (
        <div className="product">
            <Button className="product__basket-btn"
            onClick={() => {toggleBasket(product.id)}}
            >
                <ShoppingCart
                className={`basket-icon ${isItemInBasket ? 'basket-icon--active' : ''}`} 
                size={iconSize}/>
            </Button>

            <Button className="product__favorite-btn"
            onClick={() => toggleFavorite(product)}
            >
                <Heart
                className={`favorite-icon ${isFavorite ? 'favorite-icon--active' : ''}`}
                size={iconSize}/>
            </Button>
            { product.imageUrl && !imgError
            ? (
                <img className="product-img" 
                src={product.imageUrl} 
                alt={product.name}
                onError={() => setImgError(true)} 
                />
                
            )
            : ( 
                <ImagePlaceholder/>
            )
            }
            
            <h2 className="product__title">{product.name}</h2>
            {/* <h3 className="product__category">{product.category.name}</h3> */}
            <p className="product__price">{product.price}</p>
        </div>
    )
}

export default ProductCard
