import React from "react";
import TeamSlide from "./TeamSlide";
import TeamTitle from "./TeamTitle";

const Team = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="flex justify-center items-center gap-32 my-20 w-full">
        <TeamTitle></TeamTitle>
        <TeamSlide></TeamSlide>
      </div>
    </div>
  );
};

export default Team;
