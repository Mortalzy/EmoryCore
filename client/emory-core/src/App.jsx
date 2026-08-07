import {BrowserRouter, Routes, Route} from 'react-router-dom'

import RegistrationForm from "./components/RegistrationForm/RegistrationForm"
import LoginForm from "./components/LoginForm/LoginForm"
import MainPage from './pages/MainPage/MainPage'
import AdminPanel from './pages/AdminPanel/AdminPanel'
import Favorites from './pages/Favorites/Favorites'
import BasketPage from './pages/BasketPage/BasketPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

import { ROUTES } from './constants' 

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<LoginForm/>}/>
          <Route path={ROUTES.REGISTER} element={<RegistrationForm/>}/>
          <Route path={ROUTES.MAIN} element={<MainPage/>}/>
          <Route path={ROUTES.ADMIN} element={<AdminPanel/>}/>
          <Route path={ROUTES.BASKET} element={<BasketPage/>}/>
          <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
          <Route path={ROUTES.FAVORITE} element={<Favorites/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App