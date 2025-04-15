import React from "react";
import ProjectItem from "./ProjectItem.jsx/ProjectItem";
import projectData from "../../../data/projects.json";

const Projects = () => {
  return (
    <section
      id='projects'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='Selected projects'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1f2f2d]/60 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Projects
        </h2>
      </div>
      <div className='bg-[#1f2f2d]/60 backdrop-blur lg:mb-6'>
        <h2 className='hidden lg:block text-lg font-bold uppercase tracking-widest text-slate-200'>
          Projects
        </h2>
      </div>
      <div>
        <ul className='group/list'>
          {projectData.map((item) => {
            return (
              <ProjectItem
                name={item.name}
                link={item.link}
                para={item.para}
                src={item.src}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
