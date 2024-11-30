import React from "react";

const EducationItem = ({ timeframe, link, title, para, subtitle, orgs }) => {
  return (
    <li className='mb-12'>
      <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header
          className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
          aria-label='2024 to Present'
        >
          {timeframe}
        </header>
        <div className='z-10 sm:col-span-6'>
          <h3 className='font-medium leading-snug text-slate-200'>
            <div>
              <a
                className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'
                href={link}
                target='_blank'
                rel='noreferrer noopener'
                aria-label='Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)'
              >
                <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                <span>{title}</span>
              </a>
            </div>
          </h3>
          <h4 className='font-small leading-snug text-slate-400'>{subtitle}</h4>
          <p className='mt-2 text-sm leading-normal'>{para}</p>
          <ul class='list-inside list-disc space-y-1'>
            {orgs.map((item) => {
              return <li className='mt-2 text-sm leading-normal'>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default EducationItem;
