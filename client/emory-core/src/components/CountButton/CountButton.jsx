import './CountButton.css'
import ProtectedButton from '../ProtectedButton/ProtectedButton'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const CountButton = (props) => {
    const {
        children,
        className='',
        to,
        count=0,
        adminOnly=false,
    } = props

    const navigate = useNavigate()

    const countFormated = count > 99 ? `99+` : count

    return (
    <ProtectedButton                    
    className={className}
    to={to}
    adminOnly={adminOnly}
    >
        <div className='count-button'>
            {children}
            <div className='count-button__circle'>
                <p className='count-button__counter'>{countFormated}</p>
            </div>
        </div>
    </ProtectedButton>
    ) 
}

export default CountButton