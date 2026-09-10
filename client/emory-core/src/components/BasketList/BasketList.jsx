import "./BasketList.css"
import BasketCard from "../BasketCard/BasketCard"
import { useContext } from "react"
import { BasketContext } from "../../context/BasketContext"

const BasketList = (props) => {
    const {
        basket,
    } = useContext(BasketContext)

    const basketItems = basket.basket_items

    return (
        <ul className="basket-list">
            {basketItems.map(item => (
                <BasketCard 
                key={item.id} 
                basketItem={item}
                />
            ))}
        </ul>
    )
}

export default BasketList