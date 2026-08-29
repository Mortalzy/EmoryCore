import './AdminPanel.css'
import Button from '../../components/Button/Button.jsx'
import Layout from '../../components/Layout/Layout.jsx'
import AdminToggle from '../../components/Admin/AdminToggle/AdminToggle.jsx'
import AdminForm from '../../components/Admin/AdminForm/AdminForm.jsx'
import AdminList from '../../components/Admin/AdminList/AdminList.jsx'

import { useState, useEffect, use } from 'react'

import useProduct from '../../hooks/useProduct.js'
import useCategory from '../../hooks/useCategory.js'



const AdminPanel = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        category_id: '',
    })

    const [isEdit, setIsEdit] = useState(false)
    const [editedId, setEditedId] = useState(null)

    const [productMode, setProductMode] = useState(true)

    const {
        categories,
        setCategories,
        createCategory,
        editCategory,
        deleteCategory
    } = useCategory()

    const {
        products,
        setProducts,
        createProduct,
        deleteProduct,
        editProduct,
    } = useProduct()

    const resetForm = () => {
        setFormData({
            name: '',
            description: '',
            imageUrl: '',
            price: '',
            category_id: '',
        })
    }

    const handleChange = (event) => {
        const {value, name} = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(productMode) { // Продукты
            if(isEdit && editedId) {
                console.log(formData)
                await editProduct(editedId, {
                    name: formData.name,
                    description: formData.description,
                    imageUrl: formData.imageUrl, 
                    price: Number(formData.price),
                    category_id: Number(formData.category_id),
                })
            }
            else {
                await createProduct({
                    name: formData.name,
                    description: formData.description,
                    imageUrl: formData.imageUrl, 
                    price: Number(formData.price),
                    category_id: Number(formData.category_id),
                })
            }
        }

        else { // Категории
            if (isEdit && editedId) { // Если редактирование категории
                await editCategory(editedId, formData)
            
            }
            else {
                await createCategory({
                    name: formData.name,
                    description: formData.description,
                    imageUrl: formData.imageUrl,
                    })    
            }
        }
        resetForm()
        setIsEdit(false)
        setEditedId(null)
        
    }

    const handleDelete = (id) => {
        if(productMode) {
            deleteProduct(id)
        } else {
            deleteCategory(id)
        }
        
    }

    const handleEdit = (id) => {
        const items = productMode ? products : categories
        const editedItem = items.find(cat => cat.id === id)

        if(editedItem) {
            setIsEdit(true)
            setEditedId(editedItem.id)
            console.log("Редактируемый объект: ", editedItem)
            let newFormData = {
                name: editedItem.name,
                description: editedItem.description,
                imageUrl: editedItem.imageUrl,
            }
            
            if (productMode) {
                newFormData = {
                    ...newFormData,
                    price: editedItem.price,
                    category_id: editedItem.category_id
                }
            }
            setFormData(newFormData)
        }   
    }

    const currentItems = productMode ? products : categories

     return (
        <Layout>
          <div className='admin'>
              <h1 className='admin__title'>Панель администратора</h1>
              <AdminToggle 
              productMode= {productMode}
              setProductMode={setProductMode}
              resetForm={resetForm}
              />
              <div className='admin-main'>
                <AdminForm
                formData={formData}
                categories={categories}
                onChange={handleChange}
                onSubmit={handleSubmit}
                productMode={productMode}
                isEdit={isEdit}
                />
                <AdminList 
                items={currentItems}
                productMode={productMode}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                editedId={editedId}
                />
              </div>
          </div>
          
       </Layout>    
    )
}

export default AdminPanel