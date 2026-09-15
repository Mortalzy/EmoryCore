import getToken from '../utils/getToken.js'
import { URL } from '../constants/url.js'

const token = getToken()

const getMyOrdersApi = async () => {
    const response = await fetch(`${URL.ORDER_URL}/my`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const deleteOrderByIdApi = async (order_id) => {
    const response = await fetch(`${URL.ORDER_URL}/${order_id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const createOrderApi = async () => {
    const response = await fetch(URL.ORDER_URL, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const getOrdersByUserIdApi = async (user_id) => {
    const response = await fetch(`${URL.ORDER_URL}/${user_id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export {
    createOrderApi,
    getMyOrdersApi,
    getOrdersByUserIdApi,
    deleteOrderByIdApi,
}