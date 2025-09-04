import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const AboutPara = () => {
  return (
    <div>
      <h5 className="flex items-center bg-emerald-100 w-[204px] gap-1 px-4 py-2 rounded-full text-emerald-700 border-1 border-emerald-700 font-medium mb-6">
        {" "}
        <HiBadgeCheck className="text-2xl" />
        Trusted Worldwide
      </h5>
      <p className="text-xl font-medium text-[#303838] leading-6 w-full">
        Welcome to,
        <span className="text-[#D71921]"> Lead Marketing Global</span>. We offer
        a full range of marketing services, from strategic branding and digital
        marketing to content creation and campaign management. Our expertise
        ensures your brand stands out and thrives in a competitive market.
      </p>
    </div>
  );
};

export default AboutPara;
