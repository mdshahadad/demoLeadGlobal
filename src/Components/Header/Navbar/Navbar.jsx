import React from "react";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center max-w-7xl mx-auto py-4">
      <div>
        <img className="" src="../../../../public/10yrs-logo.png" alt="" />
      </div>
      <div className="flex gap-10 font-medium text-[#303838]">
        <Link className="font-medium" to="/">
          Home
        </Link>
        <Link to="/whoweare">Who we are</Link>
        <Link to="/our-services">Our Services</Link>
        <Link to="/our-works">Our Works</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="border-2 border-[#D71921] rounded-2xl p-1">
        <button className="bg-[#D71921] text-white font-bold px-8 py-2 rounded-xl cursor-pointer flex items-center gap-2">
          <IoCall />
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
