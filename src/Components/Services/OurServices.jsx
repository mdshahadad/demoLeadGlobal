import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceTitle from "./ServiceTitle";
import ServiceParagraph from "./ServiceParagraph";

const OurServices = () => {
  return (
    <div>
      <ServiceCard></ServiceCard>
      <section className="xl:max-w-7xl lg:max-w-5xl xl:mx-auto mx-4 my-20">
        <div className="lg:flex items-center xl:gap-44 lg:gap-24 lg:mx-0 mx-4 lg:space-y-0 space-y-12">
          {" "}
          <ServiceTitle></ServiceTitle>
          <ServiceParagraph></ServiceParagraph>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
