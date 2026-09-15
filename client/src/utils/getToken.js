import { STORAGE_KEYS } from "../constants"

const getToken = () => {
    return localStorage.getItem(STORAGE_KEYS.TOKEN)
}

export default getToken