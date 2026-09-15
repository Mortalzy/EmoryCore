import { createContext } from "react";
import useAuth from '../hooks/useAuth'

const AuthContext = createContext(null)

const AuthProvider = (props) => {
    const {
        children
    } = props

    const {
        isLogin,
        isAdmin,
        login,
        logout,
        username,
    } = useAuth()

    return (
        <AuthContext.Provider
        value={{
            isLogin,
            isAdmin,
            login,
            logout,
            username,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}