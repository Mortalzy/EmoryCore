import Layout from '../../components/Layout/Layout'
import CatalogFilters from '../../components/Catalog/CatalogFilters/CatalogFilters'
import CatalogList from '../../components/Catalog/CatalogList/CatalogList'
import useProduct from '../../hooks/useProduct'
import useCategory from '../../hooks/useCategory'
import './CatalogPage.css'
import { useState } from 'react'

const CatalogPage = () => {
    const {
        products
    } = useProduct()

    const {
        categories
    } = useCategory()

    const modes = ['default', 'down', 'up']

    const [sortState, setSortState] = useState({
        price: "default",
        alphabet: "default",
        price_from: "",
        price_to: "",
        category_id: "",
    })

    const removeFilters = () => {
        setSortState({
            price: "default",
            alphabet: "default",
            price_from: "",
            price_to: "",
            category_id: "",
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setSortState({
            ...sortState,
            [name]: value,
        })

        console.log(sortState);
        
    }

    const toggleSortMode = (type) => {
        setSortState(prev => {
            const currentMode = prev[type]
            const currentIndex = modes.indexOf(currentMode)
            const nextIndex = currentIndex === 2 ? 0 : currentIndex + 1
            return {
                ...prev,
                [type]: modes[nextIndex]
            }
        })
    }

    const filterProducts = () => {
        // Сначала будем по цене сортировать
        let sortedProducts = [...products]

        if (sortState.category_id) {
            const category_id = Number(sortState.category_id)

            sortedProducts =  sortedProducts.filter(p => p.category_id === category_id)
        }
        

        const from = parseFloat(sortState.price_from)
        const to = parseFloat(sortState.price_to)

        if(!isNaN(from)) {
            sortedProducts = sortedProducts.filter(p => p.price >= from)
        }
        if(!isNaN(to)) {
            sortedProducts = sortedProducts.filter(p => p.price <= to)
        }


        if (sortState.price === "down") {
            sortedProducts.sort((a,b) => b.price - a.price)
        }

        if (sortState.price === "up") {
            sortedProducts.sort((a,b) => a.price - b.price)
        }

        if (sortState.alphabet === "down") {
            sortedProducts.sort()
        }

        if (sortState.alphabet === "up") {
            sortedProducts.sort()
            sortedProducts.reverse()
        }

        return sortedProducts
    }
    
    const sortedProducts = filterProducts()

    return (
        <Layout>
            <div className='catalog'>
                <CatalogFilters
                sortState={sortState} 
                toggleSortMode={toggleSortMode}
                categories={categories}
                handleChange={handleChange}
                removeFilters={removeFilters}
                />
                <CatalogList products={sortedProducts}/>
            </div>
        </Layout>
    )
}

export default CatalogPage