import React from 'react'

const Skills = () => {

    let skillstext = [
        {
            name: "HTML5", 
        },
        {
            name: "CSS3", 
        },
        {
            name: "Tailwind CSS", 
        },
        {
            name: "Bootstrap 5", 
        },
        {
            name: "Javascript", 
        },
        {
            name: "React JS", 
        },
        {
            name: "Next JS", 
        },
        {
            name: "Context API", 
        },
        {
            name: "Redux", 
        },
        {
            name: "Firebase", 
        },
        {
            name: "Webflow (CMS, Interactions, Animations)", 
        },
        {
            name: "Framer", 
        },
        {
            name: "Wix", 
        },
        {
            name: "PSD to HTML", 
        },
        {
            name: "Figma to HTML", 
        },
        {
            name: "Xd to HTML", 
        },
        {
            name: "Responsive", 
        },
        {
            name: "Git/GitHub", 
        },
        {
            name: "NPM", 
        },
    ]

  return (
    <div id='skill' className='bg-[#0a090d] py-[50px]'>
      <div className="container">
        <div className="bg-[#141317] px-[30px] py-[30px] border border-[#222426] rounded-2xl">
            <span className='outfit text-[18px] font-medium rounded-md px-5 py-2 border border-white inline text-[#fff]'>Skills & Tools</span>
            <div className="mt-16">
                <div className="flex items-center flex-wrap gap-[20px]">
                    {skillstext.map((item, index)=>(
                        <span key={index.id} className='outfit text-[16px] font-normal rounded-md px-5 py-2 border border-[#2b2b2b] inline text-[#979797] 
                        hover:bg-[#9747ff] hover:text-white transition-all duration-300'>{item.name}</span>
                    ))}                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
