import { URL } from "../constants";

const registrationApi = async (userData) => {
    const response = await fetch(`${URL.DEFAULT_URL}/api/auth/register`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        }
    )

    const data = await response.json() 

    if(!response.ok) {
        throw new Error(data.message)
    }
    
    return data
}

const loginApi = async (userData) => {
    const response = await fetch(`${URL.DEFAULT_URL}/api/auth/login`, 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
    })

    const data = await response.json() 

    if(!response.ok) {
        throw new Error(data.message)
    }
    
    return data
}

export {
    registrationApi,
    loginApi
}