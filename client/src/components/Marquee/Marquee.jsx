// components/UI/Marquee/Marquee.jsx
import './Marquee.css'

const Marquee = ({
    children,
    speed = 20,        // Скорость (чем меньше, тем быстрее)
    direction = 'left', // 'left' или 'right'
    pauseOnHover = true,
    className = '',
    ...props
}) => {
    return (
        <div 
            className={`marquee-wrapper ${className}`}
            {...props}
        >
            <div 
                className={`marquee-content marquee--${direction}`}
                style={{ '--speed': `${speed}s` }}
                data-pause={pauseOnHover}
            >
                <div className="marquee-track">
                    {children}
                </div>
                <div className="marquee-track" aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Marquee