import { useState, useEffect } from "react"
import {getMyOrdersApi, getOrdersByUserIdApi, createOrderApi, deleteOrderByIdApi} from '../api/orderApi.js'

const useOrder = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        loadMyOrders()
    }, [])

    const loadMyOrders = () => {
        getMyOrdersApi()
        .then(ords => {
            console.log("Orders: ", ords)
            setOrders([...ords])
        })
        .catch(error => console.log(error))
    }

    const createOrder = () => {
        createOrderApi()
        .then(newOrder => {
            console.log("NewOrder: ", newOrder)
            setOrders(prev => [...prev, newOrder])
        })
        .catch(error => console.log(error))
    }

    return {
        orders,
        createOrder
    }
}

export default useOrder