import './FavoritesPage.css'
import CatalogList from '../../components/Catalog/CatalogList/CatalogList'
import useFavorite from '../../hooks/useFavorite'
import Layout from '../../components/Layout/Layout'

const FavoritesPage = () => {
    const {
        favorites,
        setFavorites
    } = useFavorite()

    console.log(favorites);

    const fav_products = favorites.map( item => item.product)

    console.log(fav_products);
    
    

    return (
        <Layout>
            <div className='favorites'>
                <CatalogList products={fav_products}/>
            </div>
        </Layout>
        
    )
}

export default FavoritesPage