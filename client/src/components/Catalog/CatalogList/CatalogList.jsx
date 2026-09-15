import './CatalogList.css'
import ProductCard from '../../ProductCard/ProductCard'
import { useContext } from 'react'
import { FavoriteContext } from '../../../context/FavoriteContext'
import { BasketContext } from '../../../context/BasketContext'
import List from '../../List/List'
import useProduct from '../../../hooks/useProduct'

const CatalogList = () => {
    const {products} = useProduct()

    const {favorites} = useContext(FavoriteContext)
    const {basket} = useContext(BasketContext)

    const basketItems = basket.basket_items

    return (
        // <ProductCard
        // product={item}
        // isFavorite={favorites.filter(fav => fav.product_id === item.id).length > 0} 
        // isItemInBasket={basketItems.filter(basket_item => basket_item.product_id === item.id).length > 0}
        // />
        <List items={products} ItemComponent={ProductCard}/>
    )
}

export default CatalogList