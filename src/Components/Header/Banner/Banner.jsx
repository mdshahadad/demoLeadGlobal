import { PiPaperPlaneTiltFill } from "react-icons/pi";
import "./Banner.css";
import { GiPaintBrush } from "react-icons/gi";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import ImgAnimation from "./ImgAnimation";
import paperFly from "../../../assets/banner/paperFly-removebg-preview.png";

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section className="">
      <div className="relative">
        <div
          className={`transition-all duration-2000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="lg:text-9xl text-4xl text-center font-extrabold lg:mt-20 mt-14 uppercase">
            Creative Ideas <br /> Lasting{" "}
            <span className="text-[#ff343e]">Growth</span>
          </h1>
        </div>

        <div
          className={`flex justify-end transition-all duration-2000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img src={paperFly} alt="" className="red-img fly z-10" />
        </div>
        <div
          className={`max-w-4xl mx-auto font-normal lg:mt-10 mt-4 text-white transition-all duration-2000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white text-center lg:text-lg text-sm font-normal lg:mt-10 mt-6 transition-all duration-2000 delay-200 lg:mx-0 mx-4">
            Lead Bangladesh Ltd. is a dynamic and visionary full-service
            marketing agency in Bangladesh that embarked on its transformative
            journey in 2015. At Lead Bangladesh, our foundation is built on a
            profound passion for delivering creative and professional services
            that leave a lasting impact.
          </p>
        </div>
        <div
          className={`flex justify-center lg:gap-10 gap-2 text-xl font-normal lg:mt-4 mt-6 text-white transition-all duration-2000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Designing */}

          <Link to={"/our-services"}>
            <div>
              <h4 className="relative border-2 rounded-full lg:px-8 px-4 py-2 cursor-pointer lg:text-lg lg:font-normal text-sm bg-white text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden lowercase border-white font-light">
                <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                  <GiPaintBrush />
                </span>
                Designing
              </h4>
            </div>
          </Link>

          {/* Marketing */}
          <Link to={"/our-services"}>
            <div>
              <h4 className="relative border-2 rounded-full lg:px-8 px-4 py-2 cursor-pointer bg-white lg:text-lg lg:font-normal text-sm text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden lowercase border-white font-light">
                <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                  <PiPaperPlaneTiltFill />
                </span>
                Marketing
              </h4>
            </div>
          </Link>

          <Link to={"/whoweare"}>
            <div>
              <h4 className="relative border-2 rounded-full lg:px-8 px-4 py-2 cursor-pointer bg-white lg:text-lg lg:font-normal text-sm text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden lowercase border-white font-light">
                <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                  <SiTrustpilot />
                </span>
                Branding
              </h4>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="absolute lg:bottom-8 bottom-18">
          <ImgAnimation></ImgAnimation>
        </div>
      </div>
    </section>
  );
};

export default Banner;
