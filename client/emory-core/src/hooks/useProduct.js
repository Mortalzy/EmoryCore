import { useState, useEffect } from 'react'

import { createProductApi, getProductsApi, deleteProductApi, updateProductApi, getProductsByCategoryApi } from '../api/productApi.js'

const useProduct = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        getProductsApi()
        .then( (products) => {
            console.log(products)
            setProducts(products)

        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const createProduct = async (formData) => {
        console.log('createProduct')
        console.log(formData)
        createProductApi(formData)
        .then( (product) => {
            setProducts([...products, product])
            console.log(product);
            
        })
        .catch(err => console.log(err.message))
    }

    const deleteProduct = async (id) => {
        deleteProductApi(id)
        .then( (product) => {
            const newProducts = products.filter( prod => prod.id !== id)
            setProducts(newProducts)
            console.log("Удален: ", product)
        })
        .catch(err => console.log(err.message))
    }

    const editProduct = async (id, newData) => {
        updateProductApi(id, newData)
        .then( (updatedProduct) => {
            setProducts(products.map(product => 
                product.id === id ? updatedProduct : product
            ))
            
            console.log('Обновленный: ', updatedProduct);
        })
        .catch(err => console.log(err.message))
    }

    return {
        products,
        setProducts,
        createProduct,
        deleteProduct,
        editProduct,
    }
}

export default useProduct

