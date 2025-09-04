import AboutPara from "./AboutPara";
import AboutTitle from "./AboutTitle";
import AboutVideo from "./AboutVideo";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto my-20">
      <div className="flex gap-16">
        <AboutTitle></AboutTitle>
        <AboutPara></AboutPara>
        {/* <AboutVideo></AboutVideo> */}
      </div>
    </section>
  );
};

export default About;
