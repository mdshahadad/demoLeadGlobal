import { PiPaperPlaneTiltFill } from "react-icons/pi";
import "./Banner.css";
import { GiPaintBrush } from "react-icons/gi";
import { SiTrustpilot } from "react-icons/si";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-9xl text-center font-extrabold mt-20 uppercase">
          Creative Ideas <br /> Lasting Growth
        </h1>
      </div>
      <div className="flex justify-end">
        <img
          src="../../../../public/paperFly-removebg-preview.png"
          alt=""
          className="red-img fly z-10"
        />
      </div>
      <div className="flex justify-center gap-10 text-xl font-normal mt-10 text-white">
        {/* Marketing */}
        <Link to={"/our-services"}>
          <div>
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer hover:bg-white hover:text-black duration-300 show-animation overflow-hidden">
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
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer hover:bg-white hover:text-black duration-300 show-animation overflow-hidden">
              <span className="paper-fly absolute left-4 top-1/2 -translate-y-1/2">
                <GiPaintBrush />
              </span>
              Designing
            </h4>
          </div>
        </Link>

        <Link to={"/whoweare"}>
          <div>
            <h4 className="relative border-2 rounded-full px-8 py-2 cursor-pointer hover:bg-white hover:text-black duration-300 show-animation overflow-hidden">
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
