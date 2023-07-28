// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './carousel.css';

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

function Carousel() {

  return (
    <Swiper
      className="max-w-[1240px] mx-auto py-16 px-4 relative flex justify-center items-center w-[80%] h-[80%] mb-28"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {sliderData.map((item, index) => (
        <SwiperSlide className="text-center text-lg bg-[#fff] flex justify-center items-center">
          <img
            className="block w-full h-full object-cover rounded-md select-none"
            src={item.url}
            alt="/"
            key={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
