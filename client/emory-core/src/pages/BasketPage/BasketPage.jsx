import "./BasketPage.css"
import useBasket from "../../hooks/useBasket"
import Layout from '../../components/Layout/Layout'
import BasketList from "../../components/BasketList/BasketList"
import BasketTotal from "../../components/BasketTotal/BasketTotal"


const BasketPage = () => {

    const {
        basket,
        updateBasketItem,
        removeFromBasket,
    } = useBasket()

    const basketItems = basket.basket_items

    return (
        <Layout>
            <div className="basket-page">
                <BasketList 
                basketItems={basketItems}
                updateBasketItem={updateBasketItem}
                removeFromBasket={removeFromBasket}
                />
                <BasketTotal basketItems={basketItems}/>
            </div>
            
        </Layout>
        
    )
}

export default BasketPage