import {
  EffectFlip,
  Autoplay,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import slideOne from "../../assets/people/peopleOne.jpg";
import slideTwo from "../../assets/people/peopleOne.jpg";
import slideThree from "../../assets/people/peopleOne.jpg";
import slideFour from "../../assets/people/peopleOne.jpg";
import slideFive from "../../assets/people/peopleOne.jpg";
import slideSix from "../../assets/people/peopleOne.jpg";
import slideSeven from "../../assets/people/peopleOne.jpg";
import slideEight from "../../assets/people/peopleOne.jpg";
import slideNine from "../../assets/people/peopleOne.jpg";
// import "./TeamSlide.css";

const TeamSlide = () => {
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
    <div className="lg:w-3/5 lg:-ml-0 -ml-5 w-full mx-auto rounded-2xl mt-10 lg:mt-0">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={5}
        slidesPerView={3}
        rotate={180}
        loop={true}
        effect={"coverflow"}
        autoplay={{ delay: 800, disableOnInteraction: false }}
        speed={2000}
        style={{ padding: "12px" }}
        breakpoints={{
          320: {
            // phones
            slidesPerView: 3,
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
            spaceBetween: 30,
          },
        }}
      >
        <div>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="rounded-2xl lg:w-[290px] w-[173px] lg:h-[500px]">
                <img
                  className="rounded-2xl"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TeamSlide;
