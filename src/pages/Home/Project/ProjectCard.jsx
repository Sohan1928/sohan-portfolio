import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../../components/ui/3DCardEffect";

export function ThreeDCardDemo() {
  return (
    <div className="grid gap-4 px-4 pb-8 md:pb-0 md:gap-0 md:px-0 md:grid-cols-2">
      {/* image 1 */}
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#7b3aff] bg-[#1e0d3e]  border-[#7b3aff] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Hotel_Haven
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1726504543/ehvjir4jrqs1mtx3bqvg.png"
              alt="thumbnail"
              className="w-full md:object-cover md:h-60 rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
          <div className="flex items-center justify-between mt-4">
            <CardItem
              translateZ={20}
              as="a"
              href="https://hotel-haven-9f393.firebaseapp.com"
              target="__blank"
              className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
            >
              See Project →
            </CardItem>
          </div>
        </CardBody>
        {/* image 2 */}
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#7b3aff] bg-[#1e0d3e]  border-[#7b3aff] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Agency_Wave
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1726504592/in6dirz4pis8jw872lgo.png"
              alt="thumbnail"
              className="w-full md:object-cover md:h-60 rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
          <div className="flex items-center justify-between mt-4">
            <CardItem
              translateZ={20}
              as="a"
              href="https://agencewave-ea348.firebaseapp.com"
              target="__blank"
              className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
            >
              See Project →
            </CardItem>
          </div>
        </CardBody>
        {/* image3 */}
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#7b3aff] bg-[#1e0d3e]  border-[#7b3aff] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Tech_Pulse
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src="http://res.cloudinary.com/du0uabbwo/image/upload/v1726504619/mojkixdnsis4bujq88yn.png"
              alt="thumbnail"
              className="w-full md:object-cover md:h-60 rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>
          <div className="flex items-center justify-between mt-4">
            <CardItem
              translateZ={20}
              as="a"
              href="https://techpulsesf.netlify.app"
              target="__blank"
              className="px-4 py-2 text-xs font-normal rounded-xl dark:text-white"
            >
              See Project →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
