import "./Footer.css";
import logo from "../../assets/banner/10yrs-logo.png";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  console.log(date, year);
  return (
    <div className="footer-container w-full bg-[#303838] static bottom-0 mt-20 py-14">
      <div className="flex justify-around max-w-5xl mx-auto">
        <div>
          <div>
            <img src={logo} alt="" />
            <div className="space-y-2.5 mt-4">
              <p className="flex items-center gap-2 text-gray-300 hover:text-[#FF6467] cursor-pointer">
                <IoMail className="text-2xl text-[#FF6467]" />{" "}
                leadglobal@gmail.com
              </p>
              <p className="flex items-center gap-2 text-gray-300 hover:text-[#FF6467] cursor-pointer">
                <FaPhone className="text-2xl text-[#FF6467]" /> +12505550199
              </p>
              <p className="flex items-center gap-2 text-gray-300 hover:text-[#FF6467] cursor-pointer">
                <FaLocationDot className="text-2xl text-[#FF6467]" /> Toronto,
                Canada.{" "}
              </p>

              <ul className="flex justify-start gap-3 mt-5">
                <Link>
                  <li>
                    <IoLogoLinkedin className="text-3xl hover:text-[#0A66C2] text-gray-400" />{" "}
                  </li>
                </Link>
                <Link>
                  <li>
                    <FaFacebook className="text-3xl hover:text-[#1877F2] text-gray-400" />{" "}
                  </li>
                </Link>
                <Link>
                  <li>
                    <FaInstagram className="text-3xl hover:text-[#E4405F] text-gray-400" />{" "}
                  </li>
                </Link>
                <Link>
                  <li>
                    <FaYoutube className="text-3xl hover:text-[#CD201F] text-gray-400" />{" "}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-4">Services</h4>
            <ul className="text-gray-300 space-y-1">
              <li className="hover:text-[#FF6467] cursor-pointer">Branding</li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Data Analytics
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Lead Generation
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Visual Production
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                App Development
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Web Development
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h4 className="text-3xl font-bold text-white mb-4">Company</h4>
            <ul className="text-gray-300 space-y-1">
              <li className="hover:text-[#FF6467] cursor-pointer">
                Who We Are
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">
                Our Services
              </li>
              <li className="hover:text-[#FF6467] cursor-pointer">Our Works</li>
              <li className="hover:text-[#FF6467] cursor-pointer">Our Team</li>
              <li className="hover:text-[#FF6467] cursor-pointer">Contact</li>
              <li className="hover:text-[#FF6467] cursor-pointer">Career</li>
              <li className="hover:text-[#FF6467] cursor-pointer">Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center max-w-5xl mx-auto bg-[#1E2939] rounded-3xl my-12 p-14">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-200">
            Stay Updated About Marketing Insights
          </h2>
          <p className="text-gray-400">
            Get the latest trends, strategies, and tips delivered to your inbox
            monthly.
          </p>
          <div className="flex gap-2 justify-center mt-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="company@gmail.com"
              className="text-white border-2 rounded-lg px-4 w-72 py-3"
            />
            <input
              type="submit"
              className="bg-[#FF6467] text-white
              px-7 py-3 rounded-lg cursor-pointer hover:bg-[#D71921]"
              value="Subscribe"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-gray-400">
        <hr />
      </div>
      <div className="flex justify-between max-w-5xl mx-auto my-4">
        <div className="flex">
          <h4 className="text-gray-200">
            &copy; {year} Lead Marketing Global. All rights reserved
          </h4>
        </div>
        <div className="flex gap-4 text-gray-200">
          <h5 className="cursor-pointer hover:text-[#FF6467]">Privacy</h5>
          <h5 className="cursor-pointer hover:text-[#FF6467]">
            Terms & Condition
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
