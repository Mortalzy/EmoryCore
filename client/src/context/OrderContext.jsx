import { createContext } from "react";
import useOrder from "../hooks/useOrder";

const OrderContext = createContext(null)

const OrderProvider = (props) => {
    const {
        children
    } = props

    const {
        orders,
        createOrder
    } = useOrder()

    return (
        <OrderContext.Provider
        value={{
            orders,
            createOrder,
        }}
        >
            {children}
        </OrderContext.Provider>
    )
}

export {
    OrderContext,
    OrderProvider
}