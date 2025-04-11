import React from 'react'
import aboutImg from "../../../assets/images/ab-3.jpg"

const About = () => {
  return (
    <div className='bg-[#0a090d] w-full py-20'>     
        <div className="container">
            <div className="grid grid-cols-3 gap-[25px]">
                <div className="col-span-2">
                    <div className="bg-[#141317] px-[30px] py-[30px] border border-[#222426] rounded-2xl">
                        <span className='outfit text-[18px] font-medium rounded-md px-5 py-2 border border-white inline'>About Me</span>                      
                        <h2 className='mt-8 outfit text-[35px] font-bold'>Hello, I’m Front-end Developer.</h2>
                        <p className='outfit text-[17px] font-medium mt-5 text-[#aeaeb1]'>As a skilled Frontend development expert, my diverse background has allowed me to apply my talents across different 
                            fields and industries, demonstrating adaptability and versatility.</p>
                        <div className="mt-10">
                            <div className="flex items-center justify-start outfit text-[16px] font-normal mb-3">
                                <span className='flex-none basis-[90px] text-[#aeaeb1]'>Phone</span>
                                <span className='flex-none basis-[70px]'>:</span>
                                <span>01605528981</span>
                            </div>
                            <div className="flex items-center justify-start outfit text-[16px] font-normal mb-3">
                                <span className='flex-none basis-[90px] text-[#aeaeb1]'>Email</span>
                                <span className='flex-none basis-[70px]'>:</span>
                                <span>mahedihasan7784@gmail.com</span>
                            </div>    
                            <div className="flex items-center justify-start outfit text-[16px] font-normal">
                                <span className='flex-none basis-[90px] text-[#aeaeb1]'>Freelance</span>
                                <span className='flex-none basis-[70px]'>:</span>
                                <span>Available</span>
                            </div>                         
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-[#141317] px-[30px] py-[40px] flex justify-center items-center border border-[#222426] rounded-2xl">
                        <div className="w-[300px] h-[300px] rounded-full bg-amber-400 flex justify-center items-center">
                            <img className='w-full h-full object-cover rounded-full' src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[90%] bg-[#141317] px-[30px] py-[30px] border border-[#222426] rounded-2xl mx-auto mt-6">
                <div className="grid grid-cols-4 gap-[25px]">
                    <div className="text-center">
                        <span className='outfit text-[40px] font-bold'>03+</span>
                        <p className='outfit text-[18px] font-normal mt-3 text-[#aeaeb1] '>YEARS EXPERIENCE</p>
                    </div>
                    <div className="text-center">
                        <span className='outfit text-[40px] font-bold'>60+</span>
                        <p className='outfit text-[18px] font-normal mt-3 text-[#aeaeb1] '>TOTAL PROJECTS</p>
                    </div>
                    <div className="text-center">
                        <span className='outfit text-[40px] font-bold'>10</span>
                        <p className='outfit text-[18px] font-normal mt-3 text-[#aeaeb1] '>CLIENT PROJECT</p>
                    </div>
                    <div className="text-center">
                        <span className='outfit text-[40px] font-bold'>00</span>
                        <p className='outfit text-[18px] font-normal mt-3 text-[#aeaeb1] '>UNHAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default About
