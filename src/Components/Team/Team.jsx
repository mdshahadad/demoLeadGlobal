import React from "react";
import TeamSlide from "./TeamSlide";
import TeamTitle from "./TeamTitle";
import TeamParagraph from "./TeamParagraph";

const Team = () => {
  return (
    <section className="">
      <div className="2xl:max-w-[1500px] xl:max-w-[1400px] w-full xl:mx-auto lg:mx-4">
        <div className="lg:flex xl:justify-center lg:justify-between items-center 2xl:gap-32 xl:gap-28 lg:gap-4 my-20 w-full">
          <TeamTitle></TeamTitle>
          <TeamSlide></TeamSlide>
        </div>
      </div>
      <div className="xl:max-w-6xl lg:max-w-4xl lg:mx-auto bg-red-100 border-2 border-[#D71921] p-8 rounded-4xl mx-4">
        <TeamParagraph></TeamParagraph>
      </div>
    </section>
  );
};

export default Team;
