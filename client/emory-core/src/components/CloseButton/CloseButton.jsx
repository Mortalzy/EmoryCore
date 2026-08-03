import './CloseButton.css'
import {useNavigate} from 'react-router-dom'

import Button from '../Button/Button'

import { ROUTES } from '../../constants'

import {X} from 'lucide-react'

const CloseButton = (props) => {
    const {
        width,
    } = props

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(ROUTES.MAIN)
    }

    return (
        <Button
        onClick={handleClick}
        >
            <X width={width}/>   
        </Button>
    )
}

export default CloseButton