import './AdminPanel.css'
import Button from '../Button/Button'
import Marquee from '../Marquee/Marquee'

import { useState } from 'react'

const AdminPanel = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(formData);
        

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('formData');
        
    }

    return (
        <div className='admin'>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                 />

                <input
                type="text"
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
                 />

                <input
                type="number"
                name="price"
                placeholder='Price'
                value={formData.price}
                onChange={handleChange}
                 />
                
                <Button type='submit' >Добавить</Button>
            </form>
        </div>
    )
}

export default AdminPanel