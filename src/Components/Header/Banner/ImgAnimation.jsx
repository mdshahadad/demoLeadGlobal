import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ImgAnimation.css";

import imgOne from "../../../assets/moving/imgOne.png";
import imgTwo from "../../../assets/moving/imgTwo.png";
import imgThree from "../../../assets/moving/imgThree.png";
import imgFour from "../../../assets/moving/imgFour.png";
import imgFive from "../../../assets/moving/imgFive.png";
import imgSix from "../../../assets/moving/imgSix.png";
import imgSeven from "../../../assets/moving/imgSeven.png";
import imgEight from "../../../assets/moving/imgEight.png";

const ImgAnimation = () => {
  const slider = [
    { id: 1, img: imgOne },
    { id: 2, img: imgTwo },
    { id: 3, img: imgThree },
    { id: 4, img: imgFour },
    { id: 5, img: imgFive },
    { id: 6, img: imgSix },
    { id: 7, img: imgSeven },
    { id: 8, img: imgEight },
  ];
  return (
    <div className="max-w-5xl mx-auto">
      <Swiper
        modules={[Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={6}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={1000}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img className="w-52" src={slide.img} alt={`Slide ${slide.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImgAnimation;
