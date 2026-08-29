import "./AdminList.css"
import AdminCard from "../AdminCard/AdminCard"

const AdminList = (props) => {
    const {
        items,
        productMode,
        handleDelete,
        handleEdit,
        editedId,
    } = props

    return (
        <div className="admin-list">
            <h2>{productMode ? "Продукты" : "Категории"}</h2>
            <ul className="list-items">
                {items.map(item => (
                    <li key={item.id} className="item">
                        <AdminCard
                        item={item}
                        isProducts={productMode}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        isEdit={item.id === editedId}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminList