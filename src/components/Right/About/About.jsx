import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='About me'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#301633]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          About
        </h2>
      </div>
      <div className='selection:bg-gray-300 selection:text-slate-900'>
        <p className='mb-4 text-justify text-gray-100'>
          I’m a master's student in Computer Engineering at <a
            className='font-medium text-gray-100 hover:text-gray-300 focus-visible:text-gray-300'
            href='https://www.nyu.edu'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='New York University website (opens in a new tab)'
          >New York University</a>, focusing on machine learning and scalable systems. My academic path blends rigorous theoretical work with hands-on engineering, including building MLOps pipelines and cloud-based model deployment systems.
        </p>
        <p className='mb-4 text-justify text-gray-100'>
          Prior to NYU, I worked in public and private sector research roles, most recently at GBA Economic Consulting, where I led quantitative analysis for high-impact industry projects. I also spearheaded a government machine learning initiative to predict school dropout risk during the pandemic, directly informing policy.
        </p>
        <p className='mb-4 text-justify text-gray-100'>
          I’m currently deepening my skills through coursework in deep learning, robotics, and distributed systems, while building a playlist recommender platform using scalable ML workflows. My passion lies in building reliable, data-driven systems that are both technically sound and impactful in the real world.
        </p>
      </div>
    </section>
  );
};

export default About;