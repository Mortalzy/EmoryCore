import './LoginForm.css'
import { useState, useContext } from 'react'
import Button from '../Button/Button'
import CloseButton from '../CloseButton/CloseButton'
import { loginApi } from '../../api/authApi'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { login } = useContext(AuthContext)

    const [error, setError] = useState('')

    const [loginInfo, setLoginInfo] = useState('')

    const handleSubmit = async (event) => {
            event.preventDefault()

            setError('')
            setLoginInfo('')

            loginApi(formData)
            .then((data) => {
                console.log(data)
                setLoginInfo("Ура вошли!")
                
                const {token} = data
                login(data, token)
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