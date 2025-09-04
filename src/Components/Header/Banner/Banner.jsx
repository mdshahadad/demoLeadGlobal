import { PiPaperPlaneTiltFill } from "react-icons/pi";
import "./Banner.css";
import { GiPaintBrush } from "react-icons/gi";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Banner = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition-all duration-2000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-9xl text-center font-extrabold mt-20 uppercase">
          Creative Ideas <br /> Lasting{" "}
          <span className="text-[#ff343e]">Growth</span>
        </h1>
      </div>

      <div
        className={`flex justify-end transition-all duration-2000 delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="../../../../public/paperFly-removebg-preview.png"
          alt=""
          className="red-img fly z-10"
        />
      </div>
      <div
        className={`max-w-4xl mx-auto font-normal mt-10 text-white transition-all duration-2000 delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-white text-center text-lg font-normal mt-10 transition-all duration-2000 delay-200">
          Lead Bangladesh Ltd. is a dynamic and visionary full-service marketing
          agency in Bangladesh that embarked on its transformative journey in
          2015. At Lead Bangladesh, our foundation is built on a profound
          passion for delivering creative and professional services that leave a
          lasting impact.
        </p>
      </div>
      <div
        className={`flex justify-center gap-10 text-xl font-normal mt-4 text-white transition-all duration-2000 delay-200 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Marketing */}
        <Link to={"/our-services"}>
          <div>
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer bg-white text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden">
              <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                <PiPaperPlaneTiltFill />
              </span>
              Marketing
            </h4>
          </div>
        </Link>

        {/* Designing */}

        <Link to={"/our-services"}>
          <div>
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer bg-white text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden">
              <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                <GiPaintBrush />
              </span>
              Designing
            </h4>
          </div>
        </Link>

        <Link to={"/whoweare"}>
          <div>
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer bg-white text-black hover:bg-transparent hover:text-white duration-300 show-animation overflow-hidden">
              <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                <SiTrustpilot />
              </span>
              Branding
            </h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
