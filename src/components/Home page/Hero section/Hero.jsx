import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className='bg-[#0a090d] pt-20 pb-20'>
        <div className="container">
        <div className="">
            <div className="text-white">
                <p className='outfit text-[22px] font-semibold'>Hi I'm Mahedi</p>
                <h1 className='outfit text-[55px] font-bold leading-[70px] w-[700px] mt-4'>I'm a <span className='text-[#c8f31d]'>Front-end Developer</span>  Based in Bangladesh.</h1>
                <p className='outfit text-[18px] font-normal w-[750px] mt-6'>I've worked remotely with global teams, consulted with innovative startups, and partnered with creative
                    impactful digital solutions for diverse business and consumer needs.</p>
                    <div className="flex gap-[20px] mt-8">
                      <Link className='outfit text-[17px] font-semibold px-6 py-3 rounded-lg bg-[#9747ff] text-[#fff] hover:bg-[#1f1f1f]
                      hover:text-white transition-all duration-500' to="/">Hire Me!</Link>
                      <Link className='outfit text-[17px] font-semibold px-6 py-3 rounded-lg underline' to="/">View My Works</Link>
                    </div>
            </div>
            <div className=""></div>
        </div>
        </div>
    </div>
  )
}

export default Hero
