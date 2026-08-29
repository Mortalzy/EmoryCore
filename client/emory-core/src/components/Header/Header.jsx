import './Header.css'

import useAuth from '../../hooks/useAuth.js'
import useFavorite from '../../hooks/useFavorite.js'

import Button from '../Button/Button.jsx'
import CountButton from '../CountButton/CountButton.jsx'
import ProtectedButton from '../ProtectedButton/ProtectedButton.jsx'

import {useNavigate} from 'react-router-dom'

import { ROUTES } from '../../constants/routes.js'

import {ShoppingBasket, Heart, User, UserShield} from 'lucide-react'


const Header = () => {
    const navigate = useNavigate()

    const {isLogin, isAdmin, logout, username} = useAuth()
    const {favorites} = useFavorite()
    
    const favoritesCount = favorites.length

    const buttonsSize = 40

    const handleLogout = () => {
        if(isLogin()) {
            const isConfirmed = confirm("Вы точно хотите выйти из аккаунта?")
            if(isConfirmed) logout()
        } else {
            navigate(ROUTES.LOGIN)
        }        
    }
    
    return (
        <header className='header'>
            <nav className='navigation'>
                <ul className='left-side'>
                    <li className='left-side__item'>
                        <Button
                        className='big-button' 
                        onClick={ () => {navigate(ROUTES.CATALOG)}} 
                            >
                            Каталог
                        </Button>
                    </li>

                    <li className='left-side__item'>
                        <Button
                        className='' 
                        onClick={ () => {navigate('/')}} 
                            >
                            Новинки
                        </Button>
                    </li>

                    <li className='left-side__item'>
                        <Button
                        className='' 
                        onClick={ () => {navigate('/')}} 
                            >
                            Джинсы
                        </Button>
                    </li>

                    <li className='left-side__item'>
                        <Button
                        className='' 
                        onClick={ () => {navigate('/')}} 
                            >
                            Кофты
                        </Button>
                    </li>

                    <li className='left-side__item'>
                        <Button
                        className='' 
                        onClick={ () => {navigate('/')}} 
                            >
                            Футболки
                        </Button>
                    </li>
                </ul>

                <Button
                className='logo-button' 
                onClick={ () => {navigate('/')}} 
                >
                EmoryCore
                </Button>

                <ul className='right-side'>
                    <li className='right-side__item'>
                        <Button onClick={() => handleLogout() }
                        >
                        {isLogin() ? username : "Login"}
                        </Button>
                    </li>

                    <li className='right-side__item'>
                        <CountButton 
                        to={ROUTES.BASKET}
                        count={67}
                        >
                            <ShoppingBasket size={buttonsSize}/>
                        </CountButton>
                    </li>

                    <li className='right-side__item'>
                        <CountButton 
                        to={ROUTES.FAVORITE}
                        count={favoritesCount}
                        >
                            <Heart size={buttonsSize}/>
                        </CountButton>
                    </li>

                    <li className='right-side__item'>
                        <ProtectedButton
                        className='user-buttons__profile'
                        to={ROUTES.PROFILE}
                        >
                            <User size={buttonsSize}/>
                        </ProtectedButton>
                    </li>

                    <li className='right-side__item'>
                        <ProtectedButton
                        className='user_button__profile'
                        to={ROUTES.ADMIN}
                        adminOnly={true}
                        >
                            <UserShield size={buttonsSize}/>
                        </ProtectedButton>
                    </li>          
                </ul>
            </nav>
        </header>
    )
}

export default Header