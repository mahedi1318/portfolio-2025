import React from 'react'
import { NavLink } from 'react-router'

const Footers = () => {
  return (
    <div className='bg-[#0a090d] py-[30px]'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="">
            <p className='outfit text-[17px] font-medium text-[#fff]'>Copyright @ 2025 | Designed By <span className='text-[#9747ff]'>Mahedi</span></p>
          </div>
          <div className="flex gap-[40px] items-center outfit text-[18px] font-normal text-[#fff]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footers
