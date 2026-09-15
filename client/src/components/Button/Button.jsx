import './Button.css'

const Button = (props) => {
    const {
        className='',
        children,
        onClick,
        type='button'
    } = props

    return (
        <button 
        className={`button ${className}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
    )
}

export default Button