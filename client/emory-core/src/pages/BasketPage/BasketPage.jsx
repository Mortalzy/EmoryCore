import "./BasketPage.css"
import Layout from '../../components/Layout/Layout'
import BasketList from "../../components/BasketList/BasketList"
import BasketTotal from "../../components/BasketTotal/BasketTotal"


const BasketPage = () => {

    return (
        <Layout>
            <div className="basket-page">
                <BasketList />
                <BasketTotal/>
            </div>
            
        </Layout>
        
    )
}

export default BasketPage