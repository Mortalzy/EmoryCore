import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

import { ROUTES, STORAGE_KEYS } from '../constants' 
import { useState } from 'react'

const useAuth = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState(null)

    useEffect( () => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
        const data = localStorage.getItem(STORAGE_KEYS.DATA)

        if (token && data) {
            setUsername(data.first_name)
        }
    }, [])

    const isLogin = () => {
        const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
        const data = localStorage.getItem(STORAGE_KEYS.DATA)

        console.log(token);
        console.log(data);

        if (token && data) {

            return true
        }

        return false
    }

    const isAdmin = () => {
        if (!isLogin()) return false

        const data = JSON.parse(localStorage.getItem(STORAGE_KEYS.DATA))
        const role = data?.role

        if (role === "ADMIN") {
            return true
        }
        else return false
    }

    const login = (token, data) => {
        localStorage.setItem(STORAGE_KEYS.TOKEN, token)
        localStorage.setItem(STORAGE_KEYS.DATA, JSON.stringify(data))

        navigate(ROUTES.MAIN)
    }

    const logout = () => {
        localStorage.removeItem(STORAGE_KEYS.TOKEN)
        localStorage.removeItem(STORAGE_KEYS.DATA)

        setUsername(null)
        navigate(ROUTES.LOGIN)
        
    }

    return {
        isLogin,
        isAdmin,
        login,
        logout,
        username,
    }
}

export default useAuth