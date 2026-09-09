import "./BasketList.css"
import BasketCard from "../BasketCard/BasketCard"

const BasketList = (props) => {
    const {
        basketItems,
        updateBasketItem,
        removeFromBasket
    } = props

    return (
        <ul className="basket-list">
            {basketItems.map(item => (
                <BasketCard key={item.id} 
                basketItem={item}
                updateBasketItem={updateBasketItem}
                handleDeleteItem={removeFromBasket}
                />
            ))}
        </ul>
    )
}

export default BasketList