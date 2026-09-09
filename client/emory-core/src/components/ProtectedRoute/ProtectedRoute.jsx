import useAuth from "../../hooks/useAuth"
import { Navigate } from "react-router-dom"
import { ROUTES } from "../../constants"

const ProtectedRoute = (props) => {
    const {
        children,
        adminOnly=false,
    } = props

    const {isLogin, isAdmin} = useAuth()

    if (!isLogin()) {
        return <Navigate to={ROUTES.LOGIN}></Navigate>
    }

    return children

}

export default ProtectedRoute