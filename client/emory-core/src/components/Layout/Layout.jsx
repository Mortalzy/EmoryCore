import './Layout.css'

import HeaderMain from '../Header/Header'

const Layout = (props) => {
    const {
        children
    } = props

    return (
        <div className='layout'>
            <HeaderMain/>
            {children}
        </div>
    )
}

export default Layout