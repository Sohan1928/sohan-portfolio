import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const EducationCart = ({ item }) => {
  const { course_name, title, college_name, year } = item;
  return (
    <div className=" border rounded-xl border-[#8042fb] pb-8 mb-4 hover:bg-[#301d55] transition-all  duration-300 last:mb-0">
      <div className="flex items-center pl-2 space-x-4 space-y-8 md:space-x-6 md:pl-6 ">
        <p className="p-2 text-2xl md:text-4xl rounded-full bg-[#200850]">
          <FaGraduationCap />
        </p>
        <div className="">
          <div className="flex items-center space-x-8">
            <h1 className="md:text-xl font-bold text-[#8c52ff]">{year}</h1>
            <h1 className="px-2 py-1 rounded-full border border-[#8042fb]">
              {title}
            </h1>
          </div>
          <h1 className="text-2xl font-bold">{course_name}</h1>
          <h1>{college_name}</h1>
        </div>
      </div>
    </div>
  );
};

export default EducationCart;
