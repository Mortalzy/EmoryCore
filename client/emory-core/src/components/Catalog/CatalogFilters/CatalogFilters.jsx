import { useState } from 'react'
import Button from '../../Button/Button'
import {ArrowUp10, ArrowDown10, ChevronsUpDown, ArrowDownAZ, ArrowUpAZ, Eraser} from 'lucide-react'
import './CatalogFilters.css'

const CatalogFilters = (props) => {
    const {
        sortState,
        toggleSortMode,
        categories,
        handleChange,
        removeFilters
    } = props

    const iconSize = 24;

    const modesIconPrice = {
        default: <ChevronsUpDown size={iconSize}/>, 
        down: <ArrowDown10 size={iconSize}/>,
        up: <ArrowUp10 size={iconSize}/>
    }

    const modesIconAlphabet = {
        default: <ChevronsUpDown size={iconSize}/>, 
        down: <ArrowDownAZ size={iconSize}/>,
        up: <ArrowUpAZ size={iconSize}/>
    }
    
    return (
        
        <div className='filters'>
            <Button className='filters-btn'
            onClick={() => toggleSortMode("alphabet")}
            >
                <span className='filters-btn__content'>Name {modesIconAlphabet[sortState.alphabet]}</span> 
            </Button>

            <Button className='filters-btn'
            onClick={() => toggleSortMode("price")}
            >
                <span className='filters-btn__content'>Price {modesIconPrice[sortState.price]}</span> 
                              
            </Button>

            <div className='filters__by-category'>
                <p className='filters-section__title'>By category</p>
                <select className='filters__select'
                name="category_id"
                value={sortState.category_id}
                onChange={handleChange}
                >
                    <option value="">Не выбран</option>
                    {categories.map(item => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            

            <div className='filters__price-range'>
                <p className='filters-section__title'>Price range</p>
                <div className='price-range__fields'>
                    <input className='price-range__input'
                    type="text"
                    name="price_from"
                    value={sortState.price_from}
                    placeholder='From'
                    onChange={handleChange}
                    />

                    <input className='price-range__input'
                    type="text"
                    name="price_to"
                    value={sortState.price_to}
                    placeholder='To'
                    onChange={handleChange}
                    />        
                </div>
            </div>

            <Button className='filters-btn'
            onClick={removeFilters}   
            >
            <span className='filters-btn__content'>Remove filters <Eraser width={iconSize}/></span> 
            </Button>
        </div>
    )
}

export default CatalogFilters