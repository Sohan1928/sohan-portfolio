import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

const DownloadCv = () => {
  return (
    <div className="items-center md:gap-8 md:flex">
      <div className="flex justify-center">
        <a href="SR_resume.pdf" download="Sohanur_Rahman_CV.pdf">
          <button className="flex items-center text-center gap-2 px-6 py-3 text-[#8750f7] bg-transparent border border-[#8750f7] rounded-full">
            Resume
            <span className="text-xl">
              <HiOutlineDownload />
            </span>
          </button>
        </a>
      </div>
      <div className="flex items-center justify-center mt-4 space-x-3 md:mt-0">
        <h3 className="text-[#8750f7] border border-[#8750f7] p-1.5 text-xl rounded-full">
          <a href="https://www.facebook.com/profile.php?id=100008071849017&mibextid=ZbWKwL">
            <FaFacebookF />
          </a>
        </h3>
        <h3 className="text-[#8750f7] border border-[#8750f7] p-1.5 text-xl rounded-full">
          <a href="https://www.linkedin.com/in/sksohanurrahmanofficial">
            <FaLinkedinIn />
          </a>
        </h3>
        <h3 className="text-[#8750f7] border border-[#8750f7] p-1.5 text-xl rounded-full">
          <a href="https://github.com/Sohan1928">
            <GrGithub />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default DownloadCv;
