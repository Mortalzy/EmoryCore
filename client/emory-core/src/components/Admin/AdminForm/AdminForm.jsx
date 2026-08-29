import './AdminForm.css'
import Button from '../../Button/Button'

const AdminForm = (props) => {
    const {
        formData,
        categories,
        onChange,
        onSubmit,
        productMode,
        isEdit,        
    } = props

    const title = isEdit ? "Редактирование" : "Создание"
    const buttonTitle = isEdit ? "Изменить" : "Добавить"

    return (
        <div className='admin-form'>
            <h2>{title}</h2>
            <form onSubmit={onSubmit} className='form'>
                <input 
                type='text'
                name='name'
                placeholder='Name' 
                value={formData.name || ''}
                onChange={onChange}
                />

                <input 
                type='text'
                name='description'
                placeholder='Description' 
                value={formData.description || ''}
                onChange={onChange}
                />

                <input 
                type='text'
                name='imageUrl'
                placeholder='Image URL' 
                value={formData.imageUrl || ''}
                onChange={onChange}
                />

                {productMode && ( 
                    <>
                    <input 
                    type='text'
                    name='price'
                    placeholder='Price' 
                    value={formData.price || ''}
                    onChange={onChange}
                    />

                    <select 
                    name='category_id'
                    value={formData.category_id}
                    onChange={onChange}
                    >
                        <option value="">Выберите категорию</option>
                        {categories.map(item => (
                            <option 
                            key={item.id}
                            value={item.id}
                            >
                                {item.name}
                            </option>
                        ))}
                        
                    </select>
                    </>
                )}

                <Button
                className='form__submit-btn'
                type='submit'
                >
                {buttonTitle}
                </Button>
            </form>
        </div>
        
    )
}

export default AdminForm