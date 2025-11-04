import { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import UserProfile from "./UserProfile";
import { Route, Routes } from "react-router-dom";
import Address from "./Address";
import Favorites from "./Favorites";
import Events from "./Events";

export default function Profile() {
    const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="lg:flex justify-between">
        <div className="sticky h-[80vh] lg:w-[20%]">
            <ProfileNavigation open={openSideBar}/>
        </div>
        <div className="lg:w-[80%]">
            <Routes>
                <Route path='/' element={<UserProfile/>}/>
                <Route path='/orders' element={<UserProfile/>}/>
                <Route path='/address' element={<Address/>}/>
                <Route path='/favorites' element={<Favorites/>}/>
                <Route path='/events' element={<Events/>}/>
            </Routes>
        </div>
    </div>
  )
}