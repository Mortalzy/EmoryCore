import './HeaderMain.css'
import {} from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

import Button from '../Button/Button.jsx'
import CountButton from '../CountButton/CountButton.jsx'
import ProtectedButton from '../ProtectedButton/ProtectedButton.jsx'

import {useNavigate} from 'react-router-dom'
import { ROUTES } from '../../constants/routes.js'

import {ShoppingBasket, Heart, User, UserShield} from 'lucide-react'



const HeaderMain = () => {
    const navigate = useNavigate()

    const {isLogin, isAdmin, logout, username} = useAuth()

    const buttonsSize = 40

    return (
        <header className='header'>
            <nav className='navigation'>
                <ul className='pages-links'>
                    <li className='pages_links__item'>
                        <a href="/catalog" className=''>Каталог</a>
                    </li>

                    <li className='list-item'>
                        <a href="/about-us" className=''>About us</a>
                    </li>
                </ul>

                <ul className='user-buttons'>
                    <Button onClick={() => {
                        const isConfirmed = confirm("Вы точно хотите выйти из аккаунта?")
                        if(isConfirmed) logout()
                    }}>Logout</Button>

                    <CountButton 
                    to={ROUTES.BASKET}
                    count={67}
                    >
                        <ShoppingBasket size={buttonsSize}/>
                    </CountButton>
                    
                    <CountButton 
                    to={ROUTES.FAVORITE}
                    count={100}
                    >
                        <Heart size={buttonsSize}/>
                    </CountButton>

                    <ProtectedButton
                    className='user-buttons__profile'
                    to={ROUTES.PROFILE}
                    >
                        <User size={buttonsSize}/>
                    </ProtectedButton>

                    <ProtectedButton
                    className='user_button__profile'
                    to={ROUTES.ADMIN}
                    adminOnly={true}
                    >
                        <UserShield size={buttonsSize}/>
                    </ProtectedButton>
                </ul>
            </nav>
            
        </header>
    )
}

export default HeaderMain