import React from "react";
import About from "../About/About";
import OurServices from "../Services/OurServices";
import OurWorks from "../Works/OurWorks";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";

const HomeContent = () => {
  return (
    <div>
      <About></About>
      <OurServices></OurServices>
      {/* <OurWorks></OurWorks>
      <Team></Team> */}
      <Footer></Footer>
    </div>
  );
};

export default HomeContent;
