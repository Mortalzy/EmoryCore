import './ProfilePage.css'
import Layout from '../../components/Layout/Layout'
import { useContext } from 'react'
import { OrderContext } from '../../context/OrderContext.jsx'
import OrderCard from '../../components/OrderCard/OrderCard.jsx'
import useUser from '../../hooks/useUser.js'

const ProfilePage = () => {

    const {
        orders
    } = useContext(OrderContext)

    const {
        user
    } = useUser()

    return (
        <Layout>
            <div className='profile'>
                <div className='profile-info'>
                    <h1>Информация о пользователе</h1>
                    <p>id: {user.id}</p>
                    <p>Name: {user.first_name}</p>
                    <p>Second name: {user.second_name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
                <h1>Мои заказы</h1>
                <ul className='order-list'>
                    {orders.map(item => (
                        <OrderCard key={item.id} order={item}/>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default ProfilePage