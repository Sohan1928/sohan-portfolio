import React, { useEffect, useState } from "react";
import EducationCart from "./EducationCart";

const Education = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("education.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="px-4 md:px-24">
      <div>
        <div>
          <h1 className="pb-4 text-2xl font-bold text-white md:text-4xl">
            Education
          </h1>
        </div>
        <div>
          <ul>
            {data.map((item) => (
              <EducationCart key={item.id} item={item}></EducationCart>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
