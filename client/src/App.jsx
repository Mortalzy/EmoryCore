import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { AuthProvider } from './context/AuthContext'
import { BasketProvider } from './context/BasketContext'
import { FavoriteProvider } from './context/FavoriteContext'
import { OrderProvider } from './context/OrderContext'



const App = () => {
  return (
      <BrowserRouter>
        <AuthProvider>
          <BasketProvider>
            <FavoriteProvider>
              <OrderProvider>
                <AppRoutes />
              </OrderProvider>
            </FavoriteProvider>
          </BasketProvider>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App