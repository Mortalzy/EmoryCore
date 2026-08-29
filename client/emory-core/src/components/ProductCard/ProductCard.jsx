import "./ProductCard.css"
import Button from "../Button/Button"
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder"
import {Heart} from 'lucide-react'
import { useState } from "react"

const ProductCard = (props) => {
    const {
        product,
        isFavorite,
        toggleFavorite
    } = props

    const [imgError, setImgError] = useState(false)

    return (
        <div className="product">
            <Button className="product__favorite-btn"
            onClick={() => toggleFavorite(product)}
            >
                <Heart
                className={`favorite-icon ${isFavorite ? 'favorite-icon__active' : ''}`}
                size={30}/>
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
