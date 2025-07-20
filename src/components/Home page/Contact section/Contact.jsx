import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div id='contact' className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <div className="xl:grid xl:grid-cols-4 lg:grid-cols-2 gap-[30px] lg:block">
            <div className="text-white xl:text-left md:text-center">
                <span className='outfit text-[25px] font-semibold text-[#9747ff]'>Contact Info</span>
                <h3 className='outfit text-[40px] font-bold text-white'>Get In Touch</h3>
                <p className='outfit text-[18px] font-medium text-[#ccc] xl:w-[250px] md:w-[350px] xl:m-0 md:m-auto'>Don’t be afraid man! Just say hello</p>
                <div className="xl:mt-10 md:mt-5 xl:w-[300px] xl:block md:w-full md:flex md:flex-wrap md:items-center md:justify-center md:gap-[40px]">
                    <div className="flex items-center gap-[20px] xl:mt-5 md:mt-10">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <FaPhoneAlt className='text-[#9747ff] text-[18px]' />
                        </div>
                        <div className="md:text-left">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Phone</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>+880 1605-528981</span>
                        </div>                    
                    </div>
                    <div className="flex items-center gap-[20px] md:mt-10">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <MdOutlineMarkEmailRead className='text-[#9747ff] text-[20px]'/>
                        </div>
                        <div className="md:text-left">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Email</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>
                                <Link to="" >
                                    mahedihasan7784@gmail.com                                
                                </Link>
                            </span>
                        </div>                    
                    </div>
                    <div className="flex items-center gap-[20px] lg:mt-10 md:mt-1 md:mb-20 lg:mb-0">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <SlLocationPin className='text-[#9747ff] text-[20px]'/>
                        </div>
                        <div className="md:text-left">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Address</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>Dhaka, Bangladesh</span>
                        </div>                    
                    </div>
                </div>
            </div>
            <div className="xl:col-span-3">
                <div className="bg-[#100f12] md:px-[50px] sm:px-[20px] py-[50px] rounded-2xl">
                    <form action="">
                        <div className="lg:flex justify-between gap-3 text-white lg:mb-10 mb-5">
                            <div className="w-full">
                                <label className='block mb-3' htmlFor="">Name</label>
                                <input className='w-[100%] h-[50px] pl-[20px] border border-[#222426] rounded-lg' name='name' type="text" placeholder='Your name' required/>
                            </div>
                            <div className="w-full mt-5 lg:mt-0">
                                <label className='block mb-3' htmlFor="">Email</label>
                                <input className='w-[100%] h-[50px] pl-[20px] border border-[#222426] rounded-lg' name='email' type="text" placeholder='Your email' required/>
                            </div>
                        </div>
                        <div className="lg:flex sm:block justify-between gap-3 text-white">
                            <div className="w-full">
                                <label className='block mb-3' htmlFor="">Phone</label>
                                <input className='w-[100%] h-[50px] pl-[20px] border border-[#222426] rounded-lg' name='phone' type="text" placeholder='Your Phone' required/>
                            </div>
                            <div className="w-full mt-5 lg:mt-0">
                                <label className='block mb-3' htmlFor="">Subject</label>
                                <input className='w-[100%] h-[50px] pl-[20px] border border-[#222426] rounded-lg' name='subject' type="text" placeholder='Your Subject' required/>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-10 text-white">
                            <label className='block mb-3' htmlFor="">Message</label>
                            <textarea className='w-full h-[100px] md:h-[180px] pl-[20px] pt-[10px] text-[#ccc] border border-[#222426] rounded-lg' name="" id="" placeholder='Type your message' required></textarea>
                        </div>
                        <button className='py-3 px-4 bg-[#9747ff] text-white rounded-xl mt-10' type='submit'>Submit Now</button>
                    </form>
                </div>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default Contact
