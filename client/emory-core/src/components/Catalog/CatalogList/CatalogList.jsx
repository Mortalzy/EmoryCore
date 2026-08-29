import './CatalogList.css'
import ProductCard from '../../ProductCard/ProductCard'
import useFavorite from '../../../hooks/useFavorite'

const CatalogList = (props) => {

    const {
        products
    } = props

    const {favorites, toggleFavorite} = useFavorite()

    return (
        <ul className='catalog-list'>
            {products.map( item => (
                <li key={item.id} className='list-item'>
                    <ProductCard
                     product={item}
                     isFavorite={favorites.filter(fav => fav.product_id === item.id).length > 0}
                     toggleFavorite={toggleFavorite}
                    />
                </li>
            ))}
        </ul>
    )
}

export default CatalogList