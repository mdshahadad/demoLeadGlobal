import { Link } from "react-router";
import AboutIcons from "./AboutIcons";
import AboutPara from "./AboutPara";
import AboutTitle from "./AboutTitle";
import AboutVideo from "./AboutVideo";
import AboutBtn from "./AboutBtn";

const About = () => {
  return (
    <section className="lg:max-w-7xl mx-auto my-20">
      <div className="lg:flex items-center lg:gap-32 lg:mx-0 mx-4 lg:space-y-0 space-y-12">
        <AboutTitle></AboutTitle>
        <div>
          <AboutPara></AboutPara>
          <AboutIcons></AboutIcons>
          <AboutBtn></AboutBtn>
        </div>
      </div>
    </section>
  );
};

export default About;
