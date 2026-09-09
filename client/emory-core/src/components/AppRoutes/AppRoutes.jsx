import { Route, Routes } from "react-router-dom"
import { ROUTES } from "../../constants"

import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import MainPage from '../../pages/MainPage/MainPage'
import AdminPanel from "../../pages/AdminPanel/AdminPanel"
import BasketPage from "../../pages/BasketPage/BasketPage"
import ProfilePage from '../../pages/ProfilePage/ProfilePage'
import CatalogPage from '../../pages/CatalogPage/CatalogPage'
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage"

const AppRoutes = () => {
    return (
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginForm/>}/>
          <Route path={ROUTES.REGISTER} element={<RegistrationForm/>}/>
          <Route path={ROUTES.MAIN} element={<MainPage/>}/>
          <Route path={ROUTES.ADMIN} element={<AdminPanel/>}/>
          <Route path={ROUTES.BASKET} element={<BasketPage/>}/>
          <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
          <Route path={ROUTES.CATALOG} element={<CatalogPage/>}/>
          <Route path={ROUTES.FAVORITE} element={<FavoritesPage/>}/>
        </Routes>
    )
}

export default AppRoutes