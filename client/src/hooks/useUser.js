import { useState, useEffect } from "react";
import { getMyProfileApi } from "../api/userApi.js"; 

const useUser = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        getMyProfileApi()
        .then(profile => {
            console.log("User: ", profile)
            setUser(profile)
        })
        .catch(error => console.log(error))
    }

    return {
        user
    }
}

export default useUser