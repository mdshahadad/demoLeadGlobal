import React from "react";
import TeamBtn from "./TeamBtn";
import { IoIosRocket } from "react-icons/io";

const TeamParagraph = () => {
  return (
    <div className="">
      <h5 className="flex items-center justify-center bg-[#D71921] w-[204px] mx-auto gap-1 px-4 py-2 rounded-full text-red-50 border-1 border-red-100 font-medium mb-6">
        {" "}
        <IoIosRocket className="text-2xl" />
        Our Team Members
      </h5>
      <p className="text-xl font-medium text-red-700 leading-6 text-center xl:w-1/2 lg:w-2/3 w-full mx-auto">
        Discover how we've helped businesses worldwide achieve their lead. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Iste, sequi.
      </p>
      <TeamBtn></TeamBtn>
    </div>
  );
};

export default TeamParagraph;
