import React from "react";
import Navbar from "../Header/Navbar/Navbar";
import Banner from "../Header/Banner/Banner";

const Home = () => {
  return (
    <div className="home-container">
      <div
        className={`"w-96 h-screen bg-[url('../../../public/bannerImg.jpg')] bg-cover bg-center bg-no-repeat"`}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 h-full text-white text-xl font-semibold">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
    </div>
  );
};

export default Home;
