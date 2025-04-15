import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='About me'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#020202]/60 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          About
        </h2>
      </div>
      <div className='selection:bg-gray-300 selection:text-slate-900'>
        <p className='mb-4 text-justify text-gray-100'>
          I’m a master's student in Computer Engineering at{" "}
          <a
            className='font-medium text-gray-100 hover:text-gray-300 focus-visible:text-gray-300'
            href='https://www.nyu.edu'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='New York University website (opens in a new tab)'
          >
            New York University
          </a>
          , focusing on <strong>machine learning</strong>, <strong>robotics</strong>, and <strong>scalable systems</strong>. After five successful years in applied research and economic consulting, I deliberately decided to fully transition into the technology industry—motivated by a strong interest in <strong>machine learning</strong> and <strong>data-centered decision-making</strong>.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          At NYU, I cemented this transition by becoming a <strong>Graduate Teaching Assistant</strong> for the Tandon Bridge Program, where I mentor students in <strong>C++ programming</strong> and <strong>data structures</strong>. I’m currently building an organic playlist recommender platform using scalable <strong>MLOps pipelines</strong> while continuing coursework in <strong>deep learning</strong>, <strong>robotics</strong>, and <strong>distributed systems</strong>.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          Prior to NYU, I worked across both public and private sectors in <strong>data science</strong> and <strong>economic consulting</strong>. My work included leading quantitative analysis at GBA Economic Consulting for high-impact industry research, spearheading a government machine learning initiative to predict school dropout risk during the pandemic, and designing econometric models to guide policy.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          This background gives me a strong foundation not just in modeling, but also in <strong>project management</strong> and <strong>cross-functional collaboration</strong>. As a consultant, I regularly delivered presentations and know how to break down complex concepts for both technical and non-technical audiences.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          I’m particularly drawn to the following areas within machine learning:
        </p>

        <ul className='list-disc pl-6 text-gray-100 mb-4'>
          <li>
            <strong>MLOps and ML infrastructure</strong>, with a focus on cost-effective systems that are pragmatic and grounded in real-world requirements
          </li>
          <li>
            <strong>Federated Learning</strong> for both privacy-aware and cost-effective ML systems
          </li>
          <li>
            <strong>Computer Vision and Robotics</strong>, particularly in how to apply Reinforcement Learning in a computationally-efficient way
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;