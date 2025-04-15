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
          I’m a master’s student in Computer Engineering at{" "}
          <a
            className='font-medium text-gray-100 hover:text-gray-300 focus-visible:text-gray-300'
            href='https://www.nyu.edu'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='New York University website (opens in a new tab)'
          >
            New York University
          </a>
          , focusing on <strong>machine learning</strong>, <strong>robotics</strong>, and{" "}
          <strong>scalable systems</strong>. After five years in applied research and economic
          consulting, I transitioned into the tech industry—motivated by a strong interest in{" "}
          <strong>machine learning</strong> and <strong>data-driven decision-making</strong>.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          At NYU, I cemented this shift by becoming a <strong>Graduate Teaching Assistant</strong> for
          the <strong>NYU Bridge Program</strong>, where I mentor students in <strong>C++</strong> and{" "}
          <strong>data structures</strong>. I’m also building an organic playlist recommender using
          scalable <strong>MLOps pipelines</strong>, while pursuing coursework in{" "}
          <strong>deep learning</strong>, <strong>robotics</strong>, and <strong>distributed systems</strong>.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          Previously, I worked in both public and private sectors as a <strong>data scientist</strong> and{" "}
          <strong>consultant</strong>, leading analysis for industry projects, launching a government ML
          tool to predict school dropout risk, and developing <strong>econometric models</strong> to
          inform policy.
        </p>

        <p className='mb-4 text-justify text-gray-100'>
          This background has given me a strong foundation in <strong>technical modeling</strong>,{" "}
          <strong>implementation</strong>, and <strong>project management</strong>. Thanks to my consulting experience, I'm able to communicate effectively, breaking down complexity for
          both technical and non-technical audiences.
        </p>

        <p className='mb-2 text-justify text-gray-100'>
          Currently, my main interests in machine learning are the following:
        </p>

        <ul className='list-disc pl-6 text-gray-100 mb-4'>
          <li>
            <strong>MLOps and ML infrastructure</strong> — how to design efficient systems that are able to deal with the real world and its complexities
          </li>
          <li>
            <strong>Federated Learning</strong> — privacy-aware and cost-effective scalable ML. I’m particularly interested in wearable devices
          </li>
          <li>
            <strong>Computer Vision & Robotics</strong> — how can we implement Reinforcement Learning in a computationally feasible way?
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;