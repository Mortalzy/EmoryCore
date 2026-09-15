import { URL } from "../constants"
import getToken from "../utils/getToken"

const token = getToken()

const getFavoritesApi = async () => {
    const token = getToken()

    const response = await fetch(URL.FAVORITE_URL, {
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

const addFavoriteApi = async (formData) => {
    const token = getToken()

    const response = await fetch(URL.FAVORITE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
    })

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const removeFavoriteApi = async (id) => {
    const token = getToken()

    const response = await fetch(`${URL.FAVORITE_URL}/${id}`, {
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

export {
    getFavoritesApi,
    removeFavoriteApi,
    addFavoriteApi
}