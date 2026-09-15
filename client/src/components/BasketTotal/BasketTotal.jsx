import "./BasketTotal.css"
import Button from "../Button/Button"
import { useContext } from "react"
import { BasketContext } from "../../context/BasketContext"
import { OrderContext } from '../../context/OrderContext'



const BasketTotal = (props) => {
    const {
        basket
    } = useContext(BasketContext)

    const {
        orders,
        createOrder
    } = useContext(OrderContext)

    const basketItems = basket.basket_items

    console.log(basketItems)

    let basketItemsCount = 0
    let totalBasketItems = 0

    for(let item of basketItems) {
        basketItemsCount += item.count
        totalBasketItems += item.count * item.product.price
    }

    return (
        <div className="basket-total">
            <p>Товаров в корзине: {basketItemsCount}</p>
            <p>Общая сумма товаров: {totalBasketItems}</p>
            <Button onClick={createOrder}>ОФОРМИТЬ ЗАКАЗ</Button>
        </div>
    )
}

export default BasketTotal