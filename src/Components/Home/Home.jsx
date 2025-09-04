import Navbar from "../Header/Navbar/Navbar";
import Banner from "../Header/Banner/Banner";
import About from "../About/About";
import banner from "../../assets/banner/banner.jpg";
import OurServices from "../Services/OurServices";
import OurWorks from "../Works/OurWorks";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div className="home-container bg-[#F9FAFB]">
      <div
        className={`"w-96 h-screen bg-cover bg-center bg-no-repeat"`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="relative z-10 h-full text-white text-xl font-semibold">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      <About></About>
      <OurServices></OurServices>
      <OurWorks></OurWorks>
      <Team></Team>
    </div>
  );
};

export default Home;
