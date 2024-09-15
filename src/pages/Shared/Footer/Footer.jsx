import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="items-center text-center">
      <div className="flex items-center justify-center mx-auto space-x-6 text-center text-white">
        <Link to="/project">Project</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div>
        <h1 className="text-[#8750F7]">
          © 2024 All rights reserved by Sohanur Rahman
        </h1>
      </div>
    </div>
  );
};

export default Footer;
