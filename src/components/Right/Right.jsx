import React from "react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Education from "./Education/Education";

const Right = () => {
  return (
    <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
      <About />
      <Education />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
};

export default Right;
