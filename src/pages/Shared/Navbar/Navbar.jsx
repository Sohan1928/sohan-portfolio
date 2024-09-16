import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between px-8 pt-4 mx-auto text-center">
      {/* Logo Section */}
      <div>
        <img className="w-14" src="Add a heading.png" alt="logo" />
      </div>
      {/* Menu for Large Devices */}
      <div className="hidden md:flex justify-center py-1.5 mx-auto rounded-full md:w-80 bg-[#050709] border border-[#8750f7]">
        <nav className="flex items-center justify-center space-x-4 text-lg font-semibold text-center text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
      {/* Button Section */}
      <div>
        <button className="py-3 text-xl text-white px-8 font-semibold rounded-full bg-gradient-to-r from-[#8577f3] via-[#8042fb] to-[#280d5a] hidden md:inline-block hover:bg-gradient-to-l bg-[length:200%_200%] bg-right hover:bg-left transition-all duration-1000 ease-in-out">
          Hire Me!
        </button>
      </div>
      {/* Hamburger Icon for Small Devices */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 text-white border border-[#8750f7] rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-[#0F0715] border border-[#8750f7] mx-2 mt-2 rounded-lg absolute top-16 left-0 right-0 z-10`}
      >
        <nav className="flex flex-col items-center p-4 space-y-2 text-lg font-semibold text-white">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/project" onClick={() => setIsOpen(false)}>
            Project
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <button className="py-2 text-white text-xl px-8 font-semibold rounded-full bg-gradient-to-r from-[#8577f3] via-[#8750f7] to-[#2a1454]">
            Hire Me!
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
