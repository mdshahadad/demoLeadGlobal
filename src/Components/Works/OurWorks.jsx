import React from "react";
import OurWorksSlider from "./OurWorksSlider";
import WorksTitle from "./WorksTitle";
import WorksParagraph from "./WorksParagraph";

const OurWorks = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:max-w-[1500px] w-full justify-center items-center mx-auto lg:gap-16 my-20">
      <div className="lg:w-3/5 w-full flex flex-col gap-8">
        <OurWorksSlider></OurWorksSlider>
        <WorksParagraph></WorksParagraph>
      </div>
      <WorksTitle></WorksTitle>
    </div>
  );
};

export default OurWorks;
