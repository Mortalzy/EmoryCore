import { URL } from "../constants"
import getToken from "../utils/getToken"

const token = getToken()

const getCategoriesApi = async () => {
    const response = await fetch(URL.CATEGORY_URL)

    const data = await response.json()

    if(!response.ok) {
        throw new Error(data.message)
    }

    return data
}

const createCategoryApi = async (formData) => {

    const response = await fetch(URL.CATEGORY_URL, {
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

const deleteCategoryApi = async (id) => {
    const response = await fetch(`${URL.CATEGORY_URL}/${id}`, {
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

const editCategoryApi = async (id, newData) => {
    const response = await fetch(`${URL.CATEGORY_URL}/${id}`, {
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


export {
    getCategoriesApi,
    createCategoryApi,
    deleteCategoryApi,
    editCategoryApi
}

