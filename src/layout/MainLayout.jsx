/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner';

const MainLayout = () => {

    const location = useLocation();
    const isHome = location.pathname === '/';

  return (
    <div>
      {isHome ? (
       ""
       ) : (
        <div>
            <Navbar></Navbar>
        </div>
       )}

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout
