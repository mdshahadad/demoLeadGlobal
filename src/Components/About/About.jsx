import { Link } from "react-router";
import AboutIcons from "./AboutIcons";
import AboutPara from "./AboutPara";
import AboutTitle from "./AboutTitle";
import AboutVideo from "./AboutVideo";
import AboutBtn from "./AboutBtn";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto my-20">
      <div className="flex items-center gap-16">
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
