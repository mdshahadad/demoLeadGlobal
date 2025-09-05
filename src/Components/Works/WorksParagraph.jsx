import { IoIosRocket } from "react-icons/io";
import WorkBtn from "./WorkBtn";

const WorksParagraph = () => {
  return (
    <div className="lg:w-5/6 lg:mx-auto lg:ml-14 mx-4">
      <h5 className="flex items-center bg-indigo-100 w-[204px] gap-1 px-4 py-2 rounded-full text-indigo-700 border-1 border-indigo-700 font-medium mb-6">
        {" "}
        <IoIosRocket className="text-2xl" />
        Our Latest Works
      </h5>
      <p className="text-xl font-medium text-[#303838] leading-6 w-full">
        Discover how we've helped businesses worldwide achieve their lead
        generation goals and drive sustainable growth. Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Officiis, laborum! Lorem ipsum dolor
        sit amet.
      </p>
      <WorkBtn></WorkBtn>
    </div>
  );
};

export default WorksParagraph;
