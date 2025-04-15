import React from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-scroll'

const Footers = () => {
  return (
    <div className='bg-[#0a090d] py-[30px]'>
      <div className="container">
        <div className="md:flex sm:block justify-between items-center">
          <div className="">
            <p className='outfit text-[17px] font-medium text-[#fff]'>Copyright @ 2025 | Designed By <span className='text-[#9747ff]'>Mahedi</span></p>
          </div>
          <div className="mt-5 md:mt-0 flex flex-wrap md:gap-[40px] gap-[23px] items-center outfit md:text-[18px] text-[15px]  font-normal text-[#fff] cursor-pointer">
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
