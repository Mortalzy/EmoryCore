import './AdminPanel.css'
import Button from '../../components/Button/Button.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import ProductCard from '../../components/ProductCard/ProductCard.jsx'

import { useState, useEffect } from 'react'

import useProduct from '../../hooks/useProduct.js'

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
    })

    const {
        products,
        setProducts,
        createProduct,
        deleteProduct,
        editProduct,
    } = useProduct()

    const [isEditing, setIsEditing] = useState(false)
    const [editId,setEditId] = useState(null)
    
    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(formData);

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleDelete = (id) => {
        deleteProduct(id)
    }

    const handleEdit = (id) => {
        const product = products.find(prod => prod.id === id)
        if(product) {
            setIsEditing(true)
            setEditId(id)
            console.log(product);

            setFormData({
                name: product.name || '',
                description: product.description || '',
                imageUrl: product.imageUrl || '',
                price: product.price || '',
            })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(isEditing && editId) {
            editProduct(editId, formData)

            setIsEditing(false)
            setEditId(null)
            setFormData({
                name: '',
                description: '',
                imageUrl: '',
                price: '',
            })
        }
        else {
            createProduct(formData)    
        }

        
    }

    return (
        <Layout>
            <div className='admin'>
                <h1 className='admin__title'>Панель администратора</h1>

                <div className='admin-sides'>
                    <div className='admin__left-side'>
                        <form className='form' onSubmit={handleSubmit}>
                            <h2 className='form__title'>
                                {isEditing ? "Редактирование товара" : "Создать товар"}
                            </h2>
                            <input
                            type="text"
                            name="name"
                            placeholder='Название'
                            value={formData.name}
                            onChange={handleChange}
                            />

                            <input
                            type="text"
                            name="description"
                            placeholder='Доп. информация'
                            value={formData.description}
                            onChange={handleChange}
                            />

                            <input
                            type="text"
                            name="imageUrl"
                            placeholder='Ссылка на фото'
                            value={formData.imageUrl}
                            onChange={handleChange}
                            />

                            <input
                            type="number"
                            name="price"
                            placeholder='Цена'
                            value={formData.price}
                            onChange={handleChange}
                            />
                            
                            <Button
                            className="form__add-btn"
                            type='submit'
                            >
                            {isEditing ? "Сохранить" : "Добавить"}
                            </Button>
                        </form>
                    </div>

                    <div className='admin__right-side'>
                        <h2 className=''>Список всех товаров</h2>

                        <ul className='list-items'>
                            {products.map( ({id, name, description, imageUrl, price}) => {
                                return (
                                    <ProductCard
                                    id={id}
                                    key={id}
                                    name={name}
                                    description={description}
                                    imageUrl={imageUrl}
                                    price={price}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                    isEditing = {editId === id}
                                    />
                                )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default AdminPanel