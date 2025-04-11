import React from 'react'

const Service = () => {
  return (
    <div className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <span className='outfit text-[18px] font-medium rounded-md px-5 py-2 border border-white inline'>Service</span>
        <h2 className='mt-8 outfit text-[35px] font-bold'>My Quality Services</h2>
        <div className="grid grid-cols-3 gap-[30px] mt-8">
            <div className="w-full px-[25px] pt-[40px] pb-[60px] bg-[#141317] rounded-2xl">
                <h3 className='outfit text-[28px] font-semibold '>Website Design</h3>
                <ul className='mt-5'>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>Project Completed</span>
                    </li>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span> Mobile responsiveness</span>                       
                    </li>
                    <li className='outfit text-[17px] font-normal flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>E-commerce functionality</span>                        
                    </li>
                </ul>
            </div>
            <div className="w-full px-[25px] pt-[40px] pb-[60px] bg-[#141317] rounded-2xl">
                <h3 className='outfit text-[28px] font-semibold '>Front End Developer</h3>
                <ul className='mt-5'>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>HTML, CSS, JavaScript, React JS</span>
                    </li>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span> Mobile responsiveness</span>                       
                    </li>
                    <li className='outfit text-[17px] font-normal flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>UI/UX Implementation </span>                        
                    </li>
                </ul>
            </div>
            <div className="w-full px-[25px] pt-[40px] pb-[60px] bg-[#141317] rounded-2xl">
                <h3 className='outfit text-[28px] font-semibold '>webflow Developemnt</h3>
                <ul className='mt-5'>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>Project Completed</span>
                    </li>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span> Animations & Interactions</span>                       
                    </li>
                    <li className='outfit text-[17px] font-normal flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>CMS Integration</span>                        
                    </li>
                </ul>
            </div>
            <div className="w-full px-[25px] pt-[40px] pb-[60px] bg-[#141317] rounded-2xl">
                <h3 className='outfit text-[28px] font-semibold '>Figma Design</h3>
                <ul className='mt-5'>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>Figma to HTML/CSS conversion</span>
                    </li>
                    <li className='outfit text-[17px] font-normal mb-3 flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>Pixel-perfect implementation</span>                       
                    </li>
                    <li className='outfit text-[17px] font-normal flex items-center gap-[10px]'>
                        <span>*</span>
                        <span>Tailwind CSS / Bootstrap</span>                        
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
