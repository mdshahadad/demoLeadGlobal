import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceTitle from "./ServiceTitle";
import ServiceParagraph from "./ServiceParagraph";

const OurServices = () => {
  return (
    <div>
      <ServiceCard></ServiceCard>
      <section className="max-w-7xl mx-auto my-20">
        <div className="flex items-center gap-52">
          <ServiceTitle></ServiceTitle>
          <ServiceParagraph></ServiceParagraph>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
