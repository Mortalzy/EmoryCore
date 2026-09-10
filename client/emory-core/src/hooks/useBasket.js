import {getBasketApi, addToBasketApi, removeFromBasketApi, updateBasketItemApi} from '../api/basketApi.js'
import { useState, useEffect } from 'react'

const useBasket = () => {
    const [basket, setBasket] = useState({
        basket_items: []
    })

    useEffect( () => {
        loadBasket()
    }, [])

    const isItemInBasket = (product_id) => {
        return basket.basket_items.filter(item => item.product_id === product_id).length > 0 
    }

    const toggleBasket = (product_id) => {
        const isInBusket = isItemInBasket(product_id)
        if (isInBusket) {
            removeFromBasket(product_id)
        }
        else {
            addToBasket(product_id)
        }
    }

    const loadBasket = () => {
        getBasketApi()
        .then( basket => {
            console.log("Basket:", basket)
            setBasket(basket)
        })
        .catch(error => console.log(error))
    }

    const addToBasket = (product_id) => {
        addToBasketApi(product_id)
        .then((newBasketItem) => {
            console.log('newBasketItem: ', newBasketItem)

            setBasket(prev => ({
                ...prev,
                basket_items: [...prev.basket_items, newBasketItem]
            }))
            
        })
        .catch(error => console.log(error))
    }

    const removeFromBasket = (product_id) => {
        removeFromBasketApi(product_id)
        .then((deletedBasketItem) => {
            console.log("deletedBasketItem: ", deletedBasketItem)
            setBasket(prev => ({
                ...prev,
                basket_items: prev.basket_items.filter(item => item.id !== deletedBasketItem.id)
            }))
        })
        .catch(error => console.log(error))
    }

    const updateBasketItem = (product_id, newCount) => {
        updateBasketItemApi(product_id, newCount)
        .then(updatedBasketItem => {
            console.log('updatedBasketItem: ', updatedBasketItem)
            
            setBasket(prev => ({
                ...basket,
                basket_items: prev.basket_items.map(item => item.id === updatedBasketItem.id 
                ? updatedBasketItem : item) 
            }))
        })
        .catch(error => console.log(error.message))
    }
    return {
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
        updateBasketItem,
        toggleBasket,
        isItemInBasket

    }
}

export default useBasket