import React from "react";
import animation from "./animaion.json";
import Lottie from "lottie-react";
import meImage from "../../../assets/meImage.png";
import DownloadCv from "./DownloadCv";
import { TypewriterEffectSmoothDemo } from "./WebDeveloper";

const Banner = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="items-center justify-around mt-10 md:flex">
        <div className="flex flex-col px-4 space-y-4 md:px-0 md:w-1/2">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            I am Sohanur Rahman
          </h1>
          <h2 className="text-2xl uppercase md:text-6xl">
            <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
          </h2>
          <p className="">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people.
          </p>
        </div>
        <div
          className="mx-auto mt-6 md:mx-0 md:mt-0"
          style={{ position: "relative", width: 300, height: 300 }}
        >
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />
          <img
            className="pt-2 border-2 rounded-lg border-[#9763ff]"
            src={meImage}
            alt=""
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="mt-10 md:pl-20 md:mt-0">
        <DownloadCv></DownloadCv>
      </div>
    </div>
  );
};

export default Banner;
