import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

const DownloadCv = () => {
  return (
    <div className="items-center md:gap-8 md:flex">
      <div>
        <button className="flex items-center text-center gap-2 px-6 py-3 text-[#8750f7] bg-transparent border border-[#8750f7] rounded-full">
          Download CV
          <span className="text-xl">
            <HiOutlineDownload />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-center mx-auto mt-4 space-x-3 text-center border md:mt-0">
        <h3>hi</h3>
        <h3>hi</h3>
        <h3>hi</h3>
      </div>
    </div>
  );
};

export default DownloadCv;
