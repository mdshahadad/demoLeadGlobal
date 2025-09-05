import React from "react";
import { AiFillSound } from "react-icons/ai";
import { FaBrain } from "react-icons/fa6";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";

const ServicesIcon = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 items-center mt-14">
      <div className="flex flex-col items-center text-center gap-2">
        <IoPaperPlaneSharp className="text-[#D71921] text-3xl" />
        <h5 className="lg:text-xl font-bold mt-1">Lead Generation</h5>
        <p className="text-sm -mt-2">Your Business Solutions</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <SiGoogleanalytics className="text-[#D71921] text-3xl" />
        <h5 className="lg:text-xl font-bold mt-1">Data Analytics</h5>
        <p className="text-sm -mt-2">Every Business Needs</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <AiFillSound className="text-[#D71921] text-3xl" />
        <h5 className="lg:text-xl font-bold mt-1">Digital Marketing</h5>
        <p className="text-sm -mt-2">Grab Potential Customer</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <FaBrain className="text-[#D71921] text-3xl" />
        <h5 className="lg:text-xl font-bold mt-1">Creative branding</h5>
        <p className="text-sm -mt-2">Stand Out In Market</p>
      </div>
    </div>
  );
};

export default ServicesIcon;
