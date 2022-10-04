import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import { Controller, Autoplay, EffectFade } from "swiper";

import { motion, useAnimation } from "framer-motion";

import slide1 from "../../../assets/images/home/slide1.png";
import slide2 from "../../../assets/images/home/slide2.jpg";
import slide3 from "../../../assets/images/home/slide3.jpg";
import slide4 from "../../../assets/images/home/slide4.jpg";
import slide5 from "../../../assets/images/home/slide5.jpg";
import next from "../../../assets/images/common/next.png";
import prev from "../../../assets/images/common/prev.png";
const ShowcaseSlider = () => {
  const animation = useAnimation();
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    animation.set({ strokeDashoffset: "200px" });
    animation.start({ strokeDashoffset: "0px" });
  }, [activeIndex]);

  // useEffect(() => {
  //   setInterval;
  // }, []);
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Controller, EffectFade]}
        effect="fade"
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setSwiper(swiper);
          setActiveIndex(swiper.activeIndex + 1);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          setActiveIndex(swiper.activeIndex + 1);
        }}
        autoplay={{ delay: "5000" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <img
              src={slide}
              alt=""
              className="md:h-[85vh] overflow-hidden w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-0 left-0 bottom-10 z-20 lg:flex items-center justify-center space-x-5 hidden">
        <img
          src={prev}
          onClick={() => swiper.slidePrev()}
          className="cursor-pointer"
        />
        <div className="relative flex items-center justify-center">
          <div className="absolute flex flex-col items-center justify-center text-white inset-0">
            <span className="border-b">{activeIndex}</span>
            <span>{slides.length}</span>
          </div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            //   xmlns:xlink="http://www.w3.org/1999/xlink"
            width="69px"
            height="62px"
            animate={animation}
            transition={{ duration: 5 }}
            style={{
              strokeDasharray: "200, 200",
              // strokeDashoffset: "0px",
            }}
          >
            <path
              fillRule="evenodd"
              stroke="rgb(255, 255, 255)"
              strokeWidth="2px"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fill="none"
              d="M43.814,9.485 C50.356,20.782 56.964,32.042 63.639,43.265 C70.314,54.487 67.042,60.061 53.825,59.986 C40.608,59.911 27.391,59.911 14.174,59.986 C0.957,60.061 -2.314,54.487 4.361,43.265 C11.035,32.042 17.644,20.782 24.186,9.485 C30.729,-1.813 37.271,-1.813 43.814,9.485 Z"
            ></path>
          </motion.svg>
        </div>
        <img
          src={next}
          onClick={() => swiper.slideNext()}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ShowcaseSlider;
