import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './components/AppRoutes/AppRoutes'


const App = () => {
  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App