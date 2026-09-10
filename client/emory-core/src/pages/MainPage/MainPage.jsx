import HeaderMain from "../../components/Header/Header"
import List from "../../components/List/List"
import useProduct from "../../hooks/useProduct"
 

const MainPage = () => {

    const {products} = useProduct()
    return (
        <div>
            <HeaderMain/>
            <List items={products}/> 
        </div>
    )
}

export default MainPage