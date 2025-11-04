import Cart from "@/component/Cart/Cart";
import Home from "@/component/Home/Home";
import { Navbar } from "@/component/Navbar/Navbar";
import UserProfile from "@/component/Profile/UserProfile";
import RestaurantDetails from "@/component/Restaurant/RestaurantDetails";
import { Route, Routes } from "react-router-dom";

export default function CustomerRoute() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account/:register' element={<Home/>}/>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/my-profile/*' element={<UserProfile/>}/>
        </Routes>
    </div>
  )
}