import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import "./OurWorks.css";
import slideOne from "../../assets/works/slideOne.jpg";
import slideTwo from "../../assets/works/slideTwo.jpg";
import slideThree from "../../assets/works/slideThree.jpg";
import slideFour from "../../assets/works/slideFour.jpg";
import slideFive from "../../assets/works/slideFive.png";
import slideSix from "../../assets/works/slideSix.jpg";
import slideSeven from "../../assets/works/slideSeven.jpg";
import slideEight from "../../assets/works/slideEight.jpg";
import slideNine from "../../assets/works/slideNine.jpg";

const OurWorksSlider = () => {
  const slides = [
    { id: 1, image: slideOne },
    { id: 2, image: slideTwo },
    { id: 3, image: slideThree },
    { id: 4, image: slideFour },
    { id: 5, image: slideFive },
    { id: 6, image: slideSix },
    { id: 7, image: slideSeven },
    { id: 8, image: slideEight },
    { id: 9, image: slideNine },
  ];

  return (
    <div className="lg:w-7/8 w-full lg:mx-auto xl:ml-7 lg:ml-5 mt-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
        spaceBetween={8}
        slidesPerView={3}
        loop={true}
        fill={"row" | "column"}
        rows={2}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        speed={2000}
        breakpoints={{
          320: {
            // phones
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            // small tablets
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            // tablets
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            // desktops
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <div>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default OurWorksSlider;
