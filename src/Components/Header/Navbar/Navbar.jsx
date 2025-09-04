import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router";
import logo from "../../../assets/banner/10yrs-logo.png";

const Navbar = () => {
  const navClass = ({ isActive }) =>
    `${isActive ? "text-[#D71921]" : ""} hover:text-[#D71921] duration-300`;

  const nav = [
    // { link: "/", name: "Home" },
    { link: "/whoweare", name: "Who we are" },
    { link: "/our-services", name: "Our Services" },
    { link: "/our-works", name: "Our Works" },
    { link: "/careers", name: "Careers" },
    { link: "/blog", name: "Blog" },
    { link: "/Contact", name: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto py-4">
      <div>
        <NavLink to={"/"}>
          <img className="" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="flex items-center gap-10 text-lg font-bold text-white">
        {nav.map((n, index) => (
          <NavLink className={navClass} key={index} to={n.link}>
            {n.name}
          </NavLink>
        ))}
        <button className="text-white border-2 border-white rounded-lg hover:text-[#D71921] hover:border-[#D71921] font-bold text-lg px-8 py-2 cursor-pointer flex items-center gap-2 duration-300">
          <IoCall />
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
