import "./BasketCard.css"
import Button from "../Button/Button"
import { useContext, useState } from "react"
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder"
import { BasketContext } from "../../context/BasketContext"

const BasketCard = (props) => {
    const {
        basketItem,
    } = props

    const {
        updateBasketItem,
        removeFromBasket,
    } = useContext(BasketContext)

    const [imgError, setImgError] = useState(false)

    const handleIncrement = () => {
        const newCount = basketItem.count + 1
        updateBasketItem(product.id, newCount)
    } 

    const handleDecrement = () => {
        if (basketItem.count <= 1) {
            const isConfirmed = confirm("Вы хотите удалить товар из корзины?")
            if(isConfirmed) {
                handleDeleteItem(product.id)
            }

        }
        else {
            const newCount = basketItem.count - 1
            updateBasketItem(product.id, newCount)
        }
        
    }

    const product = basketItem.product

    return (
        <div className="basket-card">
            { product.imageUrl && !imgError
            ? (
                <img className="basket-card__image" 
                src={product.imageUrl} 
                alt={product.name}
                onError={() => setImgError(true)} 
                />
                
            )
            : ( <ImagePlaceholder/> )}

            <p>{product.name}</p>
            <p>{product.price}</p>
            
            <div className="basket-card__change-count">
                <p className="basket-card__count">Товаров: {basketItem.count}</p>
                <div className="basket-card__buttons">
                    <Button onClick={handleIncrement} 
                    className='basket-card__button basket-card__button--plus'>+</Button>
                    <Button onClick={handleDecrement} 
                    className='basket-card__button basket-card__button--minus'>-</Button>
                </div>
                
            </div>
        </div>
    )
}

export default BasketCard