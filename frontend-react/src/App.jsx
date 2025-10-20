import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './component/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { darkTheme } from './Theme/DarkTheme'
import Home from './component/Home/Home'
import RestaurantDetails from './component/Restaurant/RestaurantDetails'
import Cart from './component/Cart/Cart'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar/>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Cart/>
    </ThemeProvider>
  )
}

export default App
