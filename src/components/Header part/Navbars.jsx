import React from 'react'
// import { Link,  } from 'react-router'
import { Link } from 'react-scroll'


const Navbars = () => {

    let links = (
        <>
        <li className='hover:text-[#9747ff]'>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        </li>
        <li className='hover:text-[#9747ff]'>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
        </li>
        <li className='hover:text-[#9747ff]'>
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500} >Skills</Link>
        </li>
        <li className='hover:text-[#9747ff]'>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500}>Works</Link>
        </li>
        <li className='hover:text-[#9747ff]'>
            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
        </li>
        </>
    )

  return (
    <div className='bg-[#0a090d] py-5 fixed top-0 left-0 w-full'>
      <div className="navbar bg-[#161518] shadow-sm container">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow outfit text-[16px] font-semibold">
                {links}
            </ul>
            </div>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={1500} className="text-white ml-[10%] lg:ml-[0%] outfit text-[28px] font-semibold cursor-pointer">Mahe<span className='text-[#9747ff]'>di</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white outfit text-[16px] font-medium">
                {links}
            </ul>
        </div>
        <div className="navbar-end lg:flex gap-3 hidden"> 
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="px-5 py-3 bg-[#9747ff] outfit text-[15px] font-semibold rounded-lg text-white cursor-pointer">Download CV</Link>
            <Link to="contact" spy={true} smooth={true} offset={-150} duration={500} className="px-5 py-3 bg-[#9747ff] outfit text-[15px] font-semibold rounded-lg text-white cursor-pointer">Let’s Talk</Link>
        </div>
        </div> 
    </div>
  )
}

export default Navbars
