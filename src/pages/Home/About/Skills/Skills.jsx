import React from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="pt-8 mx-auto">
      <div>
        <h1 className="mb-6 text-3xl text-center font-bold bg-gradient-to-r from-[#20084c] via-[#8042fb] to-[#f0eeff] bg-clip-text text-transparent border-b-4 w-44 border-[#502ba1] pb-1 justify-center mx-auto">
          My Skills
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 md:mx-24">
        <Marquee
          pauseOnHover={true}
          speed={100}
          className="flex items-center mx-6"
        >
          {/* html */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 100 }}
              role="progressbar"
            >
              100%
            </div>
            <h1 className="font-semibold">HTML5</h1>
          </div>
          {/* css */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 90 }}
              role="progressbar"
            >
              90%
            </div>
            <h1 className="font-semibold">CSS3</h1>
          </div>
          {/* tailwind css */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 100 }}
              role="progressbar"
            >
              100%
            </div>
            <h1 className="font-semibold">Tailwind CSS</h1>
          </div>
          {/* JavaScript */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 80 }}
              role="progressbar"
            >
              80%
            </div>
            <h1 className="font-semibold">JavaScript</h1>
          </div>
          {/* React js */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 86 }}
              role="progressbar"
            >
              86%
            </div>
            <h1 className="font-semibold">React JS</h1>
          </div>
          {/* Github */}
          <div className="flex flex-col items-center gap-3 mr-10 border bg-[#1b0941] border-[#8042fb] px-12 py-6 rounded-lg">
            <div
              className="border-4 radial-progress bg-[#23075d] border-[#301d55]"
              style={{ "--value": 80 }}
              role="progressbar"
            >
              80%
            </div>
            <h1 className="font-semibold">GitHub</h1>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
