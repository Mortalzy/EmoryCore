import './RegistrationForm.css'
import { useState } from 'react'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import { registrationApi } from '../../api/authApi'
import {Link, useNavigate} from 'react-router-dom'
import { ROUTES } from '../../constants'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        second_name: '',
        password: '',
        email: ''
    })

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const [registrationInfo, setRegistrationInfo] = useState('') 

    const handleSubmit = async (event) => {
            event.preventDefault()

            setError('')
            setRegistrationInfo('')

            registrationApi(formData)
            .then((data) => {
                console.log(data)
                setRegistrationInfo("Ура зарегались!")

                setTimeout( () => {
                    navigate(ROUTES.LOGIN)
                }, 1000)
                
            })
            .catch((err) => {
                console.log(err.message);
                setError(err.message)
            })
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
        
    }

    return (
        <section className='auth'>
            <h1 className='auth__title'>Registration</h1>
            <p className='auth__subtitle'>Create your own account</p>

            <form onSubmit={handleSubmit} className='auth__form'>
                <input 
                type="text"
                name='first_name'
                value={formData.first_name}
                placeholder='First name' 
                onChange={handleChange}
                />

                <input 
                type="text"
                name='second_name'
                value={formData.second_name}
                placeholder='Second name' 
                onChange={handleChange}
                />

                <input 
                type="text"
                name='email'
                value={formData.email}
                placeholder='Email' 
                onChange={handleChange}
                />

                <input 
                type="text"
                name='password'
                value={formData.password}
                placeholder='Password' 
                onChange={handleChange}
                />

                <Button 
                className='form'
                type='submit'
                >
                Registration
                </Button>

                <Link to='/login'>Уже есть аккаунт? Войдите в него</Link>
            </form>

            <CloseButton />

            {error && <p className='auth__error'>{error}</p>} 

            {registrationInfo && <p className='auth__result-info'>{registrationInfo}</p>}


        </section>
    )
}

export default RegistrationForm