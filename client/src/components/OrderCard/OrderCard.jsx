import './OrderCard.css'

const OrderCard = (props) => {
    const {
        order 
    } = props

    const orderItems = order.order_items
    console.log(orderItems)

    return (
        <div className="order">
            <p>id: {order.id}</p>
            <p>status: {order.status}</p>
            <ul className='order-items'>
                {orderItems.map(item => (
                    <li key={item.id}>
                        <p>{item.count} * {item.name}</p>
                    </li>
                    
                ))}
            </ul>
            <p>total price: {order.total_price}</p>   
        </div>
    )
}

export default OrderCard