import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div id='hero' className='bg-[#0a090d] pt-20 pb-20'>
        <div className="container">
        <div className="">
            <div className="text-white">
                <p className='outfit text-[22px] font-semibold'>Hi I'm Mahedi</p>
                <h1 className='outfit text-[35px] md:text-[55px] font-bold leading-[50px] md:leading-[70px] md:w-[700px] sm:w-[100%] mt-4'>I'm a <span className='text-[#c8f31d]'>Front-end Developer</span>  Based in Bangladesh.</h1>
                <p className='outfit text-[18px] font-normal lg:w-[750px] sm:w-full mt-6 text-[#aeaeb1]'>I've worked remotely with global teams, consulted with innovative startups, and partnered with creative
                    impactful digital solutions for diverse business and consumer needs.</p>
                    <div className="flex gap-[20px] mt-8">
                      <Link className='outfit text-[17px] font-semibold px-6 py-3 rounded-lg bg-[#9747ff] text-[#fff] hover:bg-[#1f1f1f]
                      hover:text-white transition-all duration-500 cursor-pointer' to="contact" spy={true} smooth={true} offset={-150} duration={500}>Hire Me!</Link>
                      <Link className='outfit text-[17px] font-semibold px-6 py-3 rounded-lg underline cursor-pointer' to="work" spy={true} smooth={true} offset={-100} duration={500}>View My Works</Link>
                    </div>
            </div>
            <div className=""></div>
        </div>
        </div>
    </div>
  )
}

export default Hero
