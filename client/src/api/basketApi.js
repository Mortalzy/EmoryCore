import getToken from '../utils/getToken.js'
import { URL } from '../constants/url.js'

const token = getToken()

const getBasketApi = async () => {
    const response = await fetch(URL.BASKET_URL, {
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

const addToBasketApi = async (product_id) => {
    const response = await fetch(URL.BASKET_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({product_id})
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const removeFromBasketApi = async (product_id) => {
    const response = await fetch(`${URL.BASKET_URL}/${product_id}`, {
        method: "DELETE",
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

const updateBasketItemApi = async (product_id, count) => {
    const response = await fetch(`${URL.BASKET_URL}/${product_id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({count})
        
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export {
    getBasketApi,
    addToBasketApi,
    removeFromBasketApi,
    updateBasketItemApi
}