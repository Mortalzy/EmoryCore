import {getBasketApi, addToBasketApi, removeFromBasketApi, updateBasketItemApi} from '../api/basketApi.js'
import { useState, useEffect } from 'react'

const useBasket = () => {
    const [basket, setBasket] = useState({
        basket_items: []
    })

    useEffect( () => {
        loadBasket()
    }, [])

    const toggleBasket = async (product_id) => {
        const isInBusket = basket.basket_items.filter(item => item.product_id === product_id).length > 0 
        if (isInBusket) {
            await removeFromBasket(product_id)
        }
        else {
            await addToBasket(product_id)
        }
    }

    const loadBasket = async () => {
        getBasketApi()
        .then( basket => {
            console.log("Basket:", basket)
            setBasket(basket)
        })
        .catch(error => console.log(error))
    }

    const addToBasket = async (product_id) => {
        addToBasketApi(product_id)
        .then((newBasketItem) => {
            console.log('newBasketItem: ', newBasketItem)

            setBasket({
                ...basket,
                basket_items: [...basket.basket_items, newBasketItem]
            })
            
        })
        .catch(error => console.log(error))
    }

    const removeFromBasket = async (product_id) => {
        removeFromBasketApi(product_id)
        .then((deletedBasketItem) => {
            console.log("deletedBasketItem: ", deletedBasketItem)
            const basketItems = basket.basket_items
            const newBasketArray = basketItems.filter(item => item.id !== deletedBasketItem.id)
            setBasket({
                ...basket,
                basket_items: [...newBasketArray]
            })
        })
        .catch(error => console.log(error))
    }

    const updateBasketItem = async (product_id, newCount) => {
        updateBasketItemApi(product_id, newCount)
        .then(updatedBasketItem => {
            console.log('updatedBasketItem: ', updatedBasketItem)
            const basketItems = basket.basket_items
            const newBasketItems = basketItems.map(item => item.id === updatedBasketItem.id 
                ? updatedBasketItem : item
            ) 
            setBasket({
                ...basket,
                basket_items: [...newBasketItems]
            })
        })
        .catch(error => console.log(error.message))
    }

    

    return {
        basket,
        setBasket,
        addToBasket,
        removeFromBasket,
        updateBasketItem,
        toggleBasket

    }
}

export default useBasket