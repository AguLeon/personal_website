import React from "react";
import EducationItem from "./EducationItem";
import educationData from "../../../data/education.json";

const Education = () => {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='Work experience'
    >
      <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-700/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
        <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
          Education
        </h2>
      </div>
      <div className='bg-slate-700 backdrop-blur lg:mb-6'>
        <h2 className='hidden lg:block text-lg font-bold uppercase tracking-widest text-slate-200'>
          Education
        </h2>
      </div>
      <div>
        <ol className='group/list'>
          {educationData.map((item) => {
            return (
              <EducationItem
                timeframe={item.timeframe}
                title={item.title}
                para={item.para}
                link={item.link}
                subtitle={item.subtitle}
                orgs={item.orgs}
              />
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Education;
