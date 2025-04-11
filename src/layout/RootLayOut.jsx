import React from 'react'
import Navbars from '../components/Header part/Navbars'
import { Outlet } from 'react-router'
import Footers from '../components/Footer part/Footers'

const RootLayOut = () => {
  return (
    <div>
      <Navbars />
      <Outlet />
      <Footers />
    </div>
  )
}

export default RootLayOut
