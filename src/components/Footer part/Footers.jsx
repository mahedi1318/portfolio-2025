import React from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-scroll'

const Footers = () => {
  return (
    <div className='bg-[#0a090d] py-[30px]'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="">
            <p className='outfit text-[17px] font-medium text-[#fff]'>Copyright @ 2025 | Designed By <span className='text-[#9747ff]'>Mahedi</span></p>
          </div>
          <div className="flex gap-[40px] items-center outfit text-[18px] font-normal text-[#fff] cursor-pointer">
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            <Link to="skill" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500}>Work</Link>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footers
