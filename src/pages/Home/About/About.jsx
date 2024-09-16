import React, { useState } from "react";
import Education from "./Education";
import Skills from "./Skills/Skills";

const About = () => {
  const fullText = `
    Hello, I’m Sohanur Rahman, a passionate and experienced Front-End Web Developer. 
    With a strong background in HTML, CSS, Tailwind CSS, JavaScript, React.js, Firebase. 
    I specialize in crafting high-quality, responsive web pages. My mission is to understand my clients’ needs and guide them 
    through the process of building their dream websites. Let’s collaborate and create something exceptional!
  `;

  const getFirst100Words = (text) =>
    text.split(" ").slice(0, 40).join(" ") + " ...";

  const [isFullTextVisible, setIsFullTextVisible] = useState(false);

  return (
    <div className="pt-12 bg-[#0F0715] mx-auto items-center pb-6">
      <div className="mx-auto max-w-7xl">
        <div className="">
          <h1 className="mb-6 text-3xl text-center font-bold md:text-7xl bg-gradient-to-r from-[#20084c] via-[#8042fb] to-[#f0eeff] bg-clip-text text-transparent">
            My Resume
          </h1>
          <div className="flex items-center justify-center px-6 mx-auto mb-8 text-center md:mb-0 md:w-1/2 text-pretty">
            <p>
              {isFullTextVisible ? fullText : getFirst100Words(fullText)}
              <button
                onClick={() => setIsFullTextVisible(!isFullTextVisible)}
                className="text-blue-500 underline"
              >
                {isFullTextVisible ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>
        <Education></Education>
        <Skills></Skills>
      </div>
    </div>
  );
};

export default About;
