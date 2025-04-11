import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbars = () => {

    let links = (
        <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/work">Work</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
        </>
    )

  return (
    <div className='bg-[#0a090d] py-5'>
      <div className="navbar bg-[#161518] shadow-sm container">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {links}
            </ul>
            </div>
            <Link to="/" className="text-white ml-[10%] lg:ml-[0%]  ">Mahedi</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white outfit">
                {links}
            </ul>
        </div>
        <div className="navbar-end flex gap-3"> 
            <Link to="/contact" className="px-5 py-3 bg-[#9747ff] outfit text-[15px] font-semibold rounded-lg">Download CV</Link>
            <Link to="/contact" className="px-5 py-3 bg-[#9747ff] outfit text-[15px] font-semibold rounded-lg">Let’s Talk</Link>
        </div>
        </div> 
    </div>
  )
}

export default Navbars
