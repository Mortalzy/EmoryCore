import { URL } from "../constants"
import getToken from "../utils/getToken"

const token = getToken()

const getProductsApi = async () => {
    const response = await fetch(URL.PRODUCT_URL)

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const createProductApi = async (productData) => {
    console.log('createProductApi');
    
    const response = await fetch(URL.PRODUCT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData) 
    })
    
    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const deleteProductApi = async (id) => {
    const response = await fetch(`${URL.PRODUCT_URL}/${id}`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const updateProductApi = async (id, newData) => {
    const response = await fetch(`${URL.PRODUCT_URL}/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newData) 
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const getProductsByCategoryApi = async (category_id) => {
    const response = await fetch(`${URL.PRODUCT_URL}/category/${category_id}`)

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

export {
    getProductsApi,
    createProductApi,
    deleteProductApi,
    updateProductApi,
    getProductsByCategoryApi
}