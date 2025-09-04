import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
    <div className="w-2/3 mx-auto my-20">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10, disableOnInteraction: false }}
        speed={2000}
      >
        <div className="w-1/2 mx-auto">
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
