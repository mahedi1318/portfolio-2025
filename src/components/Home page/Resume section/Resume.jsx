import React from 'react'

const Resume = () => {
  return (
    <div id='resume' className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <span className='outfit text-[18px] font-medium rounded-md px-5 py-2 border border-white inline text-[#fff]'>Resume</span>
        <h2 className='mt-8 outfit text-[35px] font-bold text-[#fff]'>My Education & Experience</h2>
        <div className="">
                <h3 className='outfit text-[30px] font-bold mt-10 text-[#fff]'>My Experience</h3>
            <div className="grid grid-cols-3 gap-[20px]">
                <div className="mt-10 group">
                    <span className='outfit text-[16px] font-normal text-[#aeaeb1] group-hover:text-[#9747ff]'>2021 - 2022</span>
                    <p className='outfit text-[25px] font-semibold mt-3 text-[#ccc]'>Website designer</p>
                    <h4 className='outfit text-[18px] font-normal mt-1 text-[#aeaeb1]'>Creative IT</h4>
                </div>
                <div className="mt-10 group">
                    <span className='outfit text-[16px] font-normal text-[#aeaeb1] group-hover:text-[#9747ff]'>2022 - 2024</span>
                    <p className='outfit text-[25px] font-semibold mt-3 text-[#ccc]'>Front-End Developer</p>
                    <h4 className='outfit text-[18px] font-normal mt-1 text-[#aeaeb1]'>Creative IT</h4>
                </div>
                <div className="mt-10 group">
                    <span className='outfit text-[16px] font-normal text-[#aeaeb1] group-hover:text-[#9747ff]'>2022 - 2024</span>
                    <p className='outfit text-[25px] font-semibold mt-3 text-[#ccc]'>webflow Designer & Developer</p>
                    <h4 className='outfit text-[18px] font-normal mt-1 text-[#aeaeb1]'>bd calling</h4>
                </div>
            </div>
            
        </div>
        <div className="">
                <h3 className='outfit text-[30px] font-bold mt-10 text-[#fff]'>My Education</h3>
            <div className="grid grid-cols-3 gap-[20px]">
                <div className="mt-10 group">
                    <span className='outfit text-[16px] font-normal text-[#aeaeb1] group-hover:text-[#9747ff]'>2019 - 2021</span>
                    <p className='outfit text-[25px] font-semibold mt-3 text-[#ccc]'>Higher Secondary Certificate.(H.S.C)</p>
                    <h4 className='outfit text-[18px] font-normal mt-1 text-[#aeaeb1]'>Chargas N.I.B. Degree College</h4>
                </div>               
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Resume
