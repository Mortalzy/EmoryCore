import './AdminCard.css'
import Button from '../../Button/Button'
import ProductCard from '../../ProductCard/ProductCard'

const AdminCard = (props) => {
    const {
        item,
        isProducts,
        onDelete,
        onEdit,
        isEdit=false
    } = props

    return (
        <div className={`admin-card ${isEdit ? "admin-card--editing" : ""}`}>

            <div className='admin-card__buttons'>
                <Button 
                onClick={() => {onEdit(item.id)}}
                className='admin-card__button admin-card__edit-btn'>
                Edit
                </Button>

                <Button
                onClick={() => {onDelete(item.id)}} 
                className='admin-card__button admin-card__delete-btn'>
                    Delete
                </Button>
            </div>

            <ProductCard product={item}/>

        </div>
    )
}

export default AdminCard