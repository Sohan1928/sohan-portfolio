import React from "react";
import { ThreeDCardDemo } from "./ProjectCard";

const Project = () => {
  return (
    <div className="pt-12 bg-[#0F0715]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-7xl bg-gradient-to-r from-[#20084c] via-[#8042fb] to-[#f0eeff] bg-clip-text text-transparent">
            My Recent Works
          </h1>
          <p className="flex justify-center px-6 pb-4 mx-auto text-center text-white md:pb-0 md:px-0 md:w-1/2">
            I put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <ThreeDCardDemo></ThreeDCardDemo>
      </div>
    </div>
  );
};

export default Project;
