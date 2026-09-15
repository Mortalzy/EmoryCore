import { createContext } from "react";
import useBasket from "../hooks/useBasket";

const BasketContext = createContext(null)

const BasketProvider = (props) => {
    const {
        children
    } = props

    const {
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
        updateBasketItem,
        toggleBasket,
        isItemInBasket,
    } = useBasket()

    return (
        <BasketContext.Provider
        value={{
            basket,
            setBasket,
            addToBasket,
            removeFromBasket,
            updateBasketItem,
            toggleBasket,
            isItemInBasket
        }}
        >
            {children}
        </BasketContext.Provider>
    )
}

export {
    BasketContext,
    BasketProvider,
}