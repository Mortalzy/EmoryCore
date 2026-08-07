import './Layout.css'

import HeaderMain from '../HeaderMain/HeaderMain'

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