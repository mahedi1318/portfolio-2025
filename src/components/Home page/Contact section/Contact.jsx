import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <div className="grid grid-cols-4 gap-[30px]">
            <div className="text-white">
                <span className='outfit text-[25px] font-semibold text-[#9747ff]'>Contact Info</span>
                <h3 className='outfit text-[40px] font-bold text-white'>Get In Touch</h3>
                <p className='outfit text-[18px] font-medium text-[#ccc] w-[250px]'>Don’t be afraid man! Just say hello</p>
                <div className="mt-10 w-[300px]">
                    <div className="flex items-center gap-[20px] mt-5">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <FaPhoneAlt className='text-[#9747ff] text-[18px]' />
                        </div>
                        <div className="">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Phone</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>+880 1605-528981</span>
                        </div>                    
                    </div>
                    <div className="flex items-center gap-[20px] mt-10">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <MdOutlineMarkEmailRead className='text-[#9747ff] text-[20px]'/>
                        </div>
                        <div className="">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Email</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>
                                <Link to="" >
                                    mahedihasan7784@gmail.com                                
                                </Link>
                            </span>
                        </div>                    
                    </div>
                    <div className="flex items-center gap-[20px] mt-10">
                        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center border border-[#757575] hover:border-[#9747ff]">
                            <SlLocationPin className='text-[#9747ff] text-[20px]'/>
                        </div>
                        <div className="">
                            <h4 className='outfit text-[22px] font-semibold text-white'>Address</h4>
                            <span className='outfit text-[16px] font-normal text-[#ccc]'>Dhaka, Bangladesh</span>
                        </div>                    
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="bg-[#100f12] px-[50px] py-[50px] rounded-2xl">
                    <form action="">
                        <div className="flex justify-between text-white mb-10">
                            <div className="">
                                <label className='block mb-3' htmlFor="">Name</label>
                                <input className='w-[430px] h-[50px] pl-[20px] border border-[#222426] rounded-lg' type="text" placeholder='Your name' required/>
                            </div>
                            <div className="">
                                <label className='block mb-3' htmlFor="">Email</label>
                                <input className='w-[430px] h-[50px] pl-[20px] border border-[#222426] rounded-lg' type="text" placeholder='Your email' required/>
                            </div>
                        </div>
                        <div className="flex justify-between text-white">
                            <div className="">
                                <label className='block mb-3' htmlFor="">Phone</label>
                                <input className='w-[430px] h-[50px] pl-[20px] border border-[#222426] rounded-lg' type="text" placeholder='Your Phone' required/>
                            </div>
                            <div className="">
                                <label className='block mb-3' htmlFor="">Subject</label>
                                <input className='w-[430px] h-[50px] pl-[20px] border border-[#222426] rounded-lg' type="text" placeholder='Your Subject' required/>
                            </div>
                        </div>
                        <div className="mt-10 text-white">
                            <label className='block mb-3' htmlFor="">Message</label>
                            <textarea className='w-full h-[180px] pl-[20px] pt-[10px] text-[#ccc] border border-[#222426] rounded-lg' name="" id="" placeholder='Type your message' required></textarea>
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
