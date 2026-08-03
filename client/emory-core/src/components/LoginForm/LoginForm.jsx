import './LoginForm.css'
import { useState } from 'react'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import { loginApi } from '../../api/authApi'
import {Link, useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import {ROUTES, STORAGE_KEYS} from '../../constants'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    console.log(ROUTES);

    const {login} = useAuth()

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const [loginInfo, setLoginInfo] = useState('')

    const handleSubmit = async (event) => {
        try {
            event.preventDefault()

            setError('')
            setLoginInfo('')

            const response = await loginApi(formData)

            if (response.ok) {
                console.log("Успех логинизации!");
                console.log("Данные с сервера: ", response.data);
                setLoginInfo('Успешный вход!')

                login(response.data.token, response.data)
                
            } 
            else {
                console.log("Неудача логинизации!");
                setError(response.data.message)
            }
        }
        catch (error) {
            console.log("Ошибка сети в LoginForm", error.message);
            setError("Ошибка сети в LoginForm")
        }
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
            <h1 className='auth__title'>Login</h1>
            <p className='auth__subtitle'>Auth in your account</p>

            <form onSubmit={handleSubmit} className='auth__form'>
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
                Login
                </Button>

                <Link to='/register'>Нет аккаунта? Зарегистрируйтесь</Link>


            </form>

            <CloseButton />

            {error && <p className='auth__error'>{error}</p>}

            {loginInfo && <p className='auth__result-info'>{loginInfo}</p>}
        </section>
    )
}

export default LoginForm