import Button from "../Button/Button"
import useAuth from "../../hooks/useAuth"

import {useNavigate} from 'react-router-dom'

const ProtectedButton = (props) => {
    const {
        children,
        className='',
        to,
        adminOnly=false,
    } = props

    const {isLogin, isAdmin} = useAuth()

    const navigate = useNavigate()
    
    if (!isAdmin() && adminOnly) {
        return null
    }

    const handleClick = () => {
        if (!isLogin()) {
            alert('Войдите в аккаунт!')
        }
        else {
            navigate(to)
        }
        
    }

    return (
        <Button
        className={className}
        onClick={handleClick} 
        >
            {children}
        </Button>
    )
}

export default ProtectedButton