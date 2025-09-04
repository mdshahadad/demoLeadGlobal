import { FaLocationDot } from "react-icons/fa6";
import { LuBadgePlus, LuClock4 } from "react-icons/lu";
import { RiPoliceBadgeLine } from "react-icons/ri";

const AboutIcons = () => {
  return (
    <div className="flex justify-center gap-10 items-center mt-14">
      <div className="flex flex-col items-center text-center gap-2">
        <LuBadgePlus className="text-[#D71921] text-3xl" />
        <h5 className="text-xl font-bold mt-1">10+ Years</h5>
        <p className="-mt-2">Industry Experience</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <FaLocationDot className="text-[#D71921] text-3xl" />
        <h5 className="text-xl font-bold mt-1">4+ Countries</h5>
        <p className="-mt-2">Global Presence</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <RiPoliceBadgeLine className="text-[#D71921] text-3xl" />
        <h5 className="text-xl font-bold mt-1">98.5%</h5>
        <p className="-mt-2">Client Retention</p>
      </div>
      <div className="flex flex-col items-center text-center gap-2">
        <LuClock4 className="text-[#D71921] text-3xl" />
        <h5 className="text-xl font-bold mt-1">24/7</h5>
        <p className="-mt-2">Support Available</p>
      </div>
    </div>
  );
};

export default AboutIcons;
