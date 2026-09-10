import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { BasketProvider } from './context/BasketContext'
import { FavoriteProvider } from './context/FavoriteContext'



const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
          <BasketProvider>
            <FavoriteProvider>
              <AppRoutes />
            </FavoriteProvider>
          </BasketProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App