import Button from "../../Button/Button"
import './AdminToggle.css'

const AdminToggle = (props) => {
    const {
        productMode,
        setProductMode,
        resetForm,
    } = props
    return (
        <div className="admin-toggle">
            <Button onClick={() => {
                if(!productMode) {
                    setProductMode(true)
                    resetForm() 
                }
            }}
            className={`admin-buttons ${productMode ? 'admin-toggle--active' : ''}`}>
                Товары
            </Button>

            <Button
            onClick={() => {
                if(productMode) {
                    setProductMode(false)
                    resetForm() 
                }     
            }}
            className={`admin-buttons ${!productMode ? 'admin-toggle--active' : ''}`}
            >
                Категории
            </Button>
        </div>
    )
}

export default AdminToggle