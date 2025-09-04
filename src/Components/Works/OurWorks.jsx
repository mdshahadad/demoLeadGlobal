import React from "react";
import OurWorksSlider from "./OurWorksSlider";
import WorksTitle from "./WorksTitle";
import WorksParagraph from "./WorksParagraph";

const OurWorks = () => {
  return (
    <div className="flex max-w-[1500px] justify-center items-center mx-auto gap-16 my-20">
      <div className="w-3/5 flex flex-col gap-8">
        <OurWorksSlider></OurWorksSlider>
        <WorksParagraph></WorksParagraph>
      </div>
      <WorksTitle></WorksTitle>
    </div>
  );
};

export default OurWorks;
