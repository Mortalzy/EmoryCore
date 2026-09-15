import getToken from '../utils/getToken.js'
import { URL } from '../constants/url.js'

const token = getToken()

const getMyProfileApi = async () => {
    const response = await fetch(URL.USER_URL, {
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

export {
    getMyProfileApi
}