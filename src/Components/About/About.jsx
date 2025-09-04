import { Link } from "react-router";
import AboutIcons from "./AboutIcons";
import AboutPara from "./AboutPara";
import AboutTitle from "./AboutTitle";
import AboutVideo from "./AboutVideo";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto my-20">
      <div className="flex items-center gap-16">
        <AboutTitle></AboutTitle>
        <div>
          <AboutPara></AboutPara>
          <AboutIcons></AboutIcons>
          <div className="flex justify-end">
            <Link to="/whoweare">
              <button className="uppercase mt-14 bg-[rgb(255,201,204)] text-[#D71921] px-32 py-4 rounded-lg font-bold text-lg hover:bg-[#F9FAFB] duration-1000 border-2 border-[#F9FAFB] hover:border-2 hover:border-[#D71921] cursor-pointer">
                Get More info
              </button>
            </Link>
          </div>
        </div>
        {/* <AboutVideo></AboutVideo> */}
      </div>
    </section>
  );
};

export default About;
