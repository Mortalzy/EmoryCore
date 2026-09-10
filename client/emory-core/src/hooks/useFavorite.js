import { useState, useEffect } from "react"
import {getFavoritesApi, removeFavoriteApi, addFavoriteApi} from '../api/favoriteApi.js'

const useFavorite = () => {
    const [favorites, setFavorites] = useState([])

    useEffect( () => {
        loadFavorites()
    }, [])

    const isFavorite = (product_id) => {
        return favorites.filter(fav => fav.product_id === product_id).length > 0
    }

    const toggleFavorite = async (product) => {
        const favProduct = favorites.find(fav => fav.product_id === product.id)
        
        if (favProduct) {
            await removeFavorite(favProduct.id)
        }
        else {
            await addFavorite({product_id: product.id})
        }
        
                
    }

    const loadFavorites = async () => {
        getFavoritesApi()
        .then(favorites => {
            console.log("getFavorites: ", favorites);
            setFavorites(favorites)
        })
        .catch(error => console.log(error))
    }

    const addFavorite = async (formData) => {
        addFavoriteApi(formData)
        .then(newFavorite => {
            console.log("addFavorites: ", newFavorite)
            setFavorites([...favorites, newFavorite])
        })
        .catch(error => console.log(error))
    }

    const removeFavorite = async (id) => {
        removeFavoriteApi(id)
        .then(deleted => {
            console.log("removeFavorite: ", deleted)
            const updatedFavorites = favorites.filter(fav => fav.id !== deleted.id)
            setFavorites(updatedFavorites) 
        })
        .catch(error => console.log(error))
    }

    return {
        favorites,
        setFavorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
    }
}

export default useFavorite