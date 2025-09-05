import banner from "../../assets/banner/banner.jpg";
import resBanner from "../../assets/banner/responsiveBanner.jpg";
import HeaderContent from "./HeaderContent";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <div>
      {/* Desktop Version */}

      <div className="hidden xl:block">
        <div
          className={`" w-full
        h-screen bg-cover bg-center bg-no-repeat"`}
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="relative z-10 h-full text-white text-xl font-semibold">
            <HeaderContent></HeaderContent>
          </div>
        </div>
      </div>

      {/* Phone Version */}

      <div className="sm:hidden block">
        <div
          className={`" w-full
        h-screen bg-cover bg-center bg-no-repeat"`}
          style={{ backgroundImage: `url(${resBanner})` }}
        >
          <div className="absolute inset-0 bg-black/90"></div>
          <div className="relative z-10 h-full text-white text-xl font-semibold">
            <HeaderContent></HeaderContent>
          </div>
        </div>
      </div>

      <HomeContent></HomeContent>
    </div>
  );
};

export default Home;
