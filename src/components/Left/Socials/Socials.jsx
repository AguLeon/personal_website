import React from "react";

const Socials = () => {
  return (
    <ul className='mt-8 flex items-center' aria-label='Social media'>
      <li className='mr-5 shrink-0 text-xs'>
        <a
          className='block hover:text-slate-200'
          href='mailto: leon.agustin@gmail.com'
          aria-label='Send an email'
          title='Email'
        >
          <span className='sr-only'>Email</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.75rem'
            height='1.75rem'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z'
            />
          </svg>
        </a>
      </li>
      <li className='mr-5 shrink-0 text-xs'>
        <a
          class='block hover:text-slate-200'
          href='https://github.com/AguLeon'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='GitHub (opens in a new tab)'
          title='GitHub'
        >
          <span class='sr-only'>GitHub</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            class='h-6 w-6'
            aria-hidden='true'
          >
            <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
          </svg>
        </a>
      </li>
      <li className='mr-5 shrink-0 text-xs'>
        <a
          className='block hover:text-slate-200'
          href='https://www.linkedin.com/in/agustin-leon-nunez/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='LinkedIn (opens in a new tab)'
          title='LinkedIn'
        >
          <span className='sr-only'>LinkedIn</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='h-6 w-6'
            aria-hidden='true'
          >
            <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
          </svg>
        </a>
      </li>
      <li className='mr-5 shrink-0 text-xs'>
        <a
          className='block hover:text-slate-200'
          href='https://leetcode.com/u/AkM-2018/'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Leetcode (opens in a new tab)'
          title='Leetcode'
        >
          <span className='sr-only'>Leetcode</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.4rem'
            height='1.4rem'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z'
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
