import './CatalogList.css'
import ProductCard from '../../ProductCard/ProductCard'
import useFavorite from '../../../hooks/useFavorite'
import useBasket from '../../../hooks/useBasket'

const CatalogList = (props) => {

    const {
        products
    } = props

    const {favorites, toggleFavorite} = useFavorite()
    const {basket, toggleBasket} = useBasket()

    const basketItems = basket.basket_items

    return (
        <ul className='catalog-list'>
            {products.map( item => (
                <li key={item.id} className='list-item'>
                    <ProductCard
                     product={item}
                     isFavorite={favorites.filter(fav => fav.product_id === item.id).length > 0}
                     toggleFavorite={toggleFavorite}
                     isItemInBasket={basketItems.filter(basket_item => basket_item.product_id === item.id).length > 0}
                     toggleBasket={toggleBasket}
                    />
                </li>
            ))}
        </ul>
    )
}

export default CatalogList