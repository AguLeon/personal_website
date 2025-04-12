import React from "react";

const About = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='About me'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#163321]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-emerald-100 lg:sr-only'>
          About
        </h2>
      </div>
      <div>
        <p className='mb-4 text-justify text-emerald-100'>
          I’m a masters student in Computer Engineering at{" "}
          <a
            className='font-medium text-emerald-100 hover:text-emerald-300 focus-visible:text-emerald-300'
            href='https://www.nyu.edu'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='New York University website (opens in a new tab)'
          >
            New York University
          </a>
          . My passion lies in backend engineering and designing resilient
          distributed systems that can handle real-world scalability and
          performance demands.
        </p>
        <p className='mb-4 text-justify text-emerald-100'>
          Previously, I worked as a backend engineer at{" "}
          <a
            className='font-medium text-emerald-100 hover:text-emerald-300 focus-visible:text-emerald-300'
            href='https://www.gupshup.io/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Gupshup (opens in a new tab)'
          >
            Gupshup
          </a>{" "}
          (June 2022–June 2024), where I developed a strong foundation in
          addressing software challenges from both technical and business
          perspectives. As a member of the CTX team, I contributed to building
          key features, including ad-creation, real-time data retrieval,
          schedulers, and notifications, which significantly enhanced the
          product's functionality and user experience.
        </p>
        <p className='mb-4 text-justify text-emerald-100'>
          Currently, I am broadening my skill set through courses in machine
          learning, embedded systems, and distributed systems. Outside of
          academics, I am actively enhancing my{" "}
          <a
            className='font-medium text-emerald-100 hover:text-emerald-300 focus-visible:text-emerald-300'
            href='https://akm-2018.github.io/ChessEngine_JS/'
            target='_blank'
            rel='noreferrer noopener'
            aria-label='Chess Engine website (opens in a new tab)'
          >
            Chess-Engine
          </a>{" "}
          project by introducing new features.
        </p>
      </div>
    </section>
  );
};

export default About;
