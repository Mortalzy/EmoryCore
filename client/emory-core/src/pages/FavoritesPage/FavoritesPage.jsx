import './FavoritesPage.css'
import CatalogList from '../../components/Catalog/CatalogList/CatalogList'
import Layout from '../../components/Layout/Layout'

const FavoritesPage = () => {
    return (
        <Layout>
            <div className='favorites'>
                <CatalogList/>
            </div>
        </Layout>
        
    )
}

export default FavoritesPage