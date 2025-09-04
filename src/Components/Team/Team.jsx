import React from "react";
import TeamSlide from "./TeamSlide";
import TeamTitle from "./TeamTitle";
import TeamParagraph from "./TeamParagraph";

const Team = () => {
  return (
    <section>
      <div className="max-w-[1500px] mx-auto">
        <div className="flex justify-center items-center gap-32 my-20 w-full">
          <TeamTitle></TeamTitle>
          <TeamSlide></TeamSlide>
        </div>
      </div>
      <div className="max-w-6xl mx-auto bg-red-100 border-2 border-[#D71921] p-8 rounded-4xl">
        <TeamParagraph></TeamParagraph>
      </div>
    </section>
  );
};

export default Team;
