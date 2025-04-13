import React from "react";
import Socials from "./Socials/Socials";
import resume from "../../pdf/resume.pdf";
import Me from "../../assets/me.jpeg";

const Left = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      <div>
        <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
          <a href='/'>Agustin Leon</a>
        </h1>
        <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
          Machine Learning Engineer
        </h2>
        <p className='mt-4 max-w-xs leading-normal'>
          MS Computer Engineering @ NYU
        </p>
        {/* <nav className='nav hidden lg:block' aria-label='In-page jump links'>
          <ul className='mt-16 w-max'>
            <li>
              <a className='group flex items-center py-3 active' href='#about'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                  About
                </span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3' href='#experience'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a className='group flex items-center py-3' href='#projects'>
                <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav> */}
        <a
          class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base mt-8'
          href={resume}
          target='_blank'
          rel='noreferrer noopener'
          aria-label='View Full Resume (opens in a new tab)'
        >
          <span>
            View Full{" "}
            <span class='inline-block'>
              Resume <span>&#8702;</span>
            </span>
          </span>
        </a>
        <img
          src={Me}
          alt='Agustin Leon portrait'
          className='mt-6 w-32 h-32 rounded-full object-cover border-2 border-gray-300 shadow-md'
        />
      </div>
      <Socials />
    </header>
  );
};

export default Left;
