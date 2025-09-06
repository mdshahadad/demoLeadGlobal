import React from "react";
import OurWorksSlider from "./OurWorksSlider";
import WorksTitle from "./WorksTitle";
import WorksParagraph from "./WorksParagraph";

const OurWorks = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:max-w-[1550px] w-full justify-between items-center mx-auto my-20">
      <div className="lg:w-3/5 w-full flex flex-col gap-8">
        <OurWorksSlider></OurWorksSlider>
        <WorksParagraph></WorksParagraph>
      </div>
      <WorksTitle></WorksTitle>
    </div>
  );
};

export default OurWorks;
