import { Link } from "react-router";
import AboutIcons from "./AboutIcons";
import AboutPara from "./AboutPara";
import AboutTitle from "./AboutTitle";
import AboutVideo from "./AboutVideo";
import AboutBtn from "./AboutBtn";

const About = () => {
  return (
    <section className="xl:max-w-7xl lg:max-w-5xl xl:mx-auto my-20 lg:mx-4">
      <div className="lg:flex items-center xl:gap-32 lg:gap-20 lg:mx-0 mx-4 lg:space-y-0 space-y-12">
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
