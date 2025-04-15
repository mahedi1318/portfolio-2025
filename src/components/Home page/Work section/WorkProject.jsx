import React from 'react'
import project1 from "../../../assets/images/p1.webp"
import project2 from "../../../assets/images/p2.webp"
import project3 from "../../../assets/images/p3.webp"
import project4 from "../../../assets/images/p4.webp"
import project5 from "../../../assets/images/p5.webp"
import { Link } from 'react-router'

const WorkProject = () => {
  return (
    <div id='work' className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <span className='outfit text-[18px] font-medium rounded-md px-5 py-2 border border-white inline text-[#fff]'>All Project</span>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[25px] mt-16">
            <div className="py-[20px] px-[20px] border rounded-xl group">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img className=' group-hover:scale-125 transition-all duration-300' src={project1} alt="" />
                </div>
                <div className="mt-7">
                    <h3 className='outfit text-[20px] font-semibold text-white'>Project 1</h3>
                    <p className='outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.</p>
                    <div className="flex justify-between items-center">
                        <Link to="" className='px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium' >View Code</Link>
                        <Link to="https://my-portfoliomahedi.netlify.app/" className='px-4 py-2 border border-[#ccc]  rounded-lg text-white outfit font-medium' >View Project</Link>
                    </div>
                </div>
            </div>
            <div className="py-[20px] px-[20px] border rounded-xl group">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img className=' group-hover:scale-125 transition-all duration-300' src={project2} alt="" />
                </div>
                <div className="mt-7">
                    <h3 className='outfit text-[20px] font-semibold text-white'>Project 1</h3>
                    <p className='outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.</p>
                    <div className="flex justify-between items-center">
                        <Link to="" className='px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium' >View Code</Link>
                        <Link to="https://esho-ecommerce-project.netlify.app/" className='px-4 py-2 border border-[#ccc]  rounded-lg text-white outfit font-medium' >View Project</Link>
                    </div>
                </div>
            </div>
            <div className="py-[20px] px-[20px] border rounded-xl group">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img className=' group-hover:scale-125 transition-all duration-300' src={project3} alt="" />
                </div>
                <div className="mt-7">
                    <h3 className='outfit text-[20px] font-semibold text-white'>Project 1</h3>
                    <p className='outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.</p>
                    <div className="flex justify-between items-center">
                        <Link to="" className='px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium' >View Code</Link>
                        <Link to="https://kaffen-project-three.netlify.app/" className='px-4 py-2 border border-[#ccc]  rounded-lg text-white outfit font-medium' >View Project</Link>
                    </div>
                </div>
            </div>
            <div className="py-[20px] px-[20px] border rounded-xl group">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img className=' group-hover:scale-125 transition-all duration-300' src={project4} alt="" />
                </div>
                <div className="mt-7">
                    <h3 className='outfit text-[20px] font-semibold text-white'>Project 1</h3>
                    <p className='outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.</p>
                    <div className="flex justify-between items-center">
                        <Link to="" className='px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium' >View Code</Link>
                        <Link to="https://devento-project-one.netlify.app/" className='px-4 py-2 border border-[#ccc] rounded-lg text-white outfit font-medium' >View Project</Link>
                    </div>
                </div>
            </div>
            <div className="py-[20px] px-[20px] border rounded-xl group">
                <div className="w-full h-[250px] overflow-hidden rounded-xl">
                    <img className=' group-hover:scale-125 transition-all duration-300' src={project5} alt="" />
                </div>
                <div className="mt-7">
                    <h3 className='outfit text-[20px] font-semibold text-white'>Project 1</h3>
                    <p className='outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.</p>
                    <div className="flex justify-between items-center">
                        <Link to="" className='px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium' >View Code</Link>
                        <Link to="https://coffee-web-project-2.netlify.app/" className='px-4 py-2 border border-[#ccc] rounded-lg text-white outfit font-medium' >View Project</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProject
