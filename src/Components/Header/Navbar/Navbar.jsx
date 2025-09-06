import { IoCall, IoClose } from "react-icons/io5";
import { NavLink } from "react-router";
import logo from "../../../assets/banner/10yrs-logo.png";
import { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden"; // lock <html>
      document.body.style.overflow = "hidden"; // lock <body>
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div className="flex justify-between items-center xl:max-w-7xl mx-auto py-4 px-4">
      {/* Logo */}
      <div>
        <NavLink to={"/"}>
          <img className="lg:w-32 w-16" src={logo} alt="Logo" />
        </NavLink>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center 2xl:gap-10 gap-6 text-lg font-bold text-white">
        {nav.map((n, index) => (
          <NavLink className={navClass} key={index} to={n.link}>
            {n.name}
          </NavLink>
        ))}
        <button className="text-white border-2 border-white rounded-lg hover:text-[#D71921] hover:border-[#D71921] font-bold text-lg xl:px-8 px-5 py-2 cursor-pointer flex items-center gap-2 duration-300">
          <IoCall />
          Let's Talk
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(true)}>
          <HiMenuAlt1 size={44} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed h-screen inset-0 z-50 flex">
          {/* Dim background */}
          <div
            className="flex-1 bg-black/50"
            onClick={() => setIsOpen(false)} // close if background clicked
          ></div>

          {/* Drawer panel */}
          <div className="w-4/5 bg-[#111] h-full flex flex-col p-6 text-white">
            <div className="flex justify-between items-center mb-8">
              <img className="w-16" src={logo} alt="Logo" />
              <button onClick={() => setIsOpen(false)}>
                <IoClose size={44} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg font-bold">
              {nav.map((n, index) => (
                <NavLink
                  className={navClass}
                  key={index}
                  to={n.link}
                  onClick={() => setIsOpen(false)}
                >
                  {n.name}
                </NavLink>
              ))}
              <button className="mt-6 text-white border-2 border-white rounded-lg hover:text-[#D71921] hover:border-[#D71921] font-bold text-lg px-6 py-2 cursor-pointer flex justify-center items-center gap-2 duration-300">
                <IoCall />
                Let's Talk
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
