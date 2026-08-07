import './ProductCard.css'
import Button from '../Button/Button'

const ProductCard = (props) => {
    const {
        id,
        name,
        description,
        imageUrl,
        price,
        onDelete=null,
        onEdit=null,
        isEditing,
    } = props

    return (
        <li key={id} className={`list-item ${isEditing ? 'list-item--editing' : ''}`}>
            <div className='product'>
                <div className='product__specials-btn'>
                    <Button
                    onClick={ () => onEdit(id)}
                    className='product__spec-btn edit-btn'
                    >
                    edit
                    </Button>

                    <Button onClick={() => onDelete(id)}
                    className='product__spec-btn delete-btn'
                    >
                    delete
                    </Button>

                </div>
                <img className='product__img' 
                src={imageUrl} alt="product-img" />
                <h3 className='product__name'>{name}</h3>
                <p className='product__price'>{price}</p>
            </div>
        </li>
    )
}

export default ProductCard