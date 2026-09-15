import './AdminCard.css'
import Button from '../../Button/Button'
import Card from '../../Card/Card'

const AdminCard = (props) => {
    const {
        item,
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

            <Card product={item}/>

        </div>
    )
}

export default AdminCard