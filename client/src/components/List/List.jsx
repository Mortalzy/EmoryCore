import './List.css'
import Card from '../Card/Card'

const List = (props) => {
    const {
        items,
        ItemComponent=Card,
    } = props

    return (
        <ul className='catalog-list'>
            {items.map( item => (
                <li key={item.id} className='list-item'>
                    <ItemComponent product={item}/>
                </li>
            ))}
        </ul>
    )
}

export default List