import React, { useState } from 'react'
import project1 from "../../../assets/images/p1.webp"
import project2 from "../../../assets/images/p2.webp"
import project3 from "../../../assets/images/p3.webp"
import project4 from "../../../assets/images/p4.webp"
import project5 from "../../../assets/images/p5.webp"
import project6 from "../../../assets/images/ak.png"
import project7 from "../../../assets/images/keenu.png"
import project8 from "../../../assets/images/radial.png"
import { Link } from 'react-router'

const WorkProject = () => {
    const projects = [
        {
            id: 1,
            title: "Custom Project 1",
            type: "custom",
            image: project1,
            code: "",
            live: "https://my-portfoliomahedi.netlify.app/",
        },
        {
            id: 2,
            title: "Custom Project 2",
            type: "custom",
            image: project2,
            code: "",
            live: "https://esho-ecommerce-project.netlify.app/",
        },
        {
            id: 3,
            title: "Custom Project 3",
            type: "custom",
            image: project3,
            code: "",
            live: "https://kaffen-project-three.netlify.app/",
        },
        {
            id: 4,
            title: "Webflow Project 1",
            type: "webflow",
            image: project7,
            code: "",
            live: "https://keenu-web.webflow.io/",            
        },
        {
            id: 5,
            title: "Custom Project 5",
            type: "custom",
            image: project5,
            code: "",
            live: "https://coffee-web-project-2.netlify.app/",
        },
        {
            id: 6,
            title: "Webflow Project 2",
            type: "webflow",
            image: project6,
            code: "",
            live: "https://af-akol-1d7c33.webflow.io/",
        },
        {
            id: 7,
            title: "Custom Project 4",
            type: "custom",
            image: project4,
            code: "",
            live: "https://devento-project-one.netlify.app/",
        },
        {
            id: 8,
            title: "Webflow Project 8",
            type: "webflow",
            image: project8,
            code: "",
            live: "https://nones-radical-site-b985af.webflow.io/",
        },
    ];

    const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.type === filter);
  return (
    <div id="work" className="bg-[#0a090d] py-[50px]">
      <div className="container">
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`outfit text-[18px] font-medium rounded-md px-5 py-2 border ${
              filter === "all" ? "bg-[#9747ff] border-0 text-white" : "text-[#fff] border-white"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("custom")}
            className={`outfit text-[18px] font-medium rounded-md px-5 py-2 border ${
              filter === "custom" ? "bg-[#9747ff] border-0 text-white" : "text-[#fff] border-white"
            }`}
          >
            Custom Code
          </button>
          <button
            onClick={() => setFilter("webflow")}
            className={`outfit text-[18px] font-medium rounded-md px-5 py-2 border ${
              filter === "webflow" ? "bg-[#9747ff] border-0 text-white" : "text-[#fff] border-white"
            }`}
          >
            Webflow
          </button>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-[25px]">
          {filteredProjects.map((project) => (
            <div key={project.id} className="py-[20px] px-[20px] border rounded-xl group">
              <div className="w-full h-[250px] overflow-hidden rounded-xl">
                <img
                  className="group-hover:scale-125 transition-all duration-300 w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className="mt-7">
                <h3 className="outfit text-[20px] font-semibold text-white">{project.title}</h3>
                <p className="outfit text-[16px] font-normal text-[#ccc] mt-3 mb-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur consectetur cumque labore laboriosam non corporis.
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={project.code || "#"}
                    className="px-4 py-2 bg-[#9747ff] rounded-lg text-white outfit font-medium"
                  >
                    View Code
                  </Link>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#ccc] rounded-lg text-white outfit font-medium"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProject;
