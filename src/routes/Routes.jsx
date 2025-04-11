import React from 'react'
import { Route, Routes as Routers } from 'react-router'
import RootLayOut from '../layout/RootLayOut'
import Home from '../pages/Home'
import AboutPage from '../pages/AboutPage'
import WorkPage from '../pages/WorkPage'
import ContactPage from '../pages/ContactPage'

const Routes = () => {
  return (
    <>
      <Routers>
        <Route path='/' element={<RootLayOut/>}>
            <Route index element={<Home />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/work' element={<WorkPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
        </Route>
      </Routers>
    </>
  )
}

export default Routes
