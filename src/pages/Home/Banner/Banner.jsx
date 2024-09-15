import React from "react";
import animation from "./animaion.json";
import Lottie from "lottie-react";
import meImage from "../../../assets/meImage.png";
import DownloadCv from "./DownloadCv";

const Banner = () => {
  return (
    <div>
      <div className="items-center justify-around mt-10 md:flex">
        <div className="flex flex-col px-4 space-y-4 md:px-0 md:w-1/2">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            I am Sohanur Rahman
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent uppercase bg-gradient-to-r from-[#8577f3] via-[#8750f7] to-[#2a1454] bg-clip-text">
            Web Developer
          </h2>
          <p className="">
            I break down complex user experinece problems to create integritiy
            focussed solutions that connect billions of people.
          </p>
        </div>
        <div style={{ position: "relative", width: 300, height: 300 }}>
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
              zIndex: 1, // Background zIndex
            }}
          />
          <img
            src={meImage}
            alt=""
            style={{
              position: "relative", // Image will be on top of Lottie
              zIndex: 2,
              width: "100%",
              height: "100%",
              objectFit: "cover", // Image covers the background
            }}
          />
        </div>
      </div>
      <div className="mt-4 md:pl-20 md:mt-0">
        <DownloadCv></DownloadCv>
      </div>
    </div>
  );
};

export default Banner;
