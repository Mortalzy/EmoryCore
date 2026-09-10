import "./Card.css"
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder"
import { useState } from "react"


const Card = (props) => {
    const {
        product,
    } = props

    const [imgError, setImgError] = useState(false)

    return (
        <div className="card">
            { product.imageUrl && !imgError
            ? (
                <img className="card-img" 
                src={product.imageUrl} 
                alt={product.name}
                onError={() => setImgError(true)} 
                />
                
            )
            : ( 
                <ImagePlaceholder/>
            )
            }
            
            <h2 className="card__title">{product.name}</h2>
            {/* <h3 className="product__category">{product.category.name}</h3> */}
            <p className="card__price">{product.price}</p>
        </div>
    )
}

export default Card
