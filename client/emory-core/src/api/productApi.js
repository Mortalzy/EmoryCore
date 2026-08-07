import { URL } from "../constants"

const getProductsApi = async () => {
    const response = await fetch(URL.PRODUCT_URL)

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const createProductApi = async (productData) => {
    const response = await fetch(URL.PRODUCT_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
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
    const response = await fetch(`${URL.PRODUCT_URL}${id}`, {
        method: "DELETE",
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const updateProductApi = async (id, newData) => {
    const response = await fetch(`${URL.PRODUCT_URL}${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData) 
    })

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
    updateProductApi
}