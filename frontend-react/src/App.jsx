import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import CustomerRoute from './Routers/CustomerRoute'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      <CustomerRoute/>
    </ThemeProvider>
  )
}

export default App
