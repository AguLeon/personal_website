import React from "react";

const Footer = () => {
  return (
    <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
      <p>
        Inspired by{" "}
        <a
          href='https://brittanychiang.com/#content'
          className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
          target='_blank'
          rel='noreferrer noopener'
          aria-label='Brittany Chiang website (opens in a new tab)'
        >
          Brittany Chiang's
        </a>{" "}
        work. Built with ReactJS and TailwindCSS
      </p>
    </footer>
  );
};

export default Footer;
