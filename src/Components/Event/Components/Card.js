import React from "react";
import eventCont from "./Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/navigation";
import { Navigation, FreeMode, Pagination } from "swiper";

function EventCard() {
  return (
    <div className="evCont">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {eventCont.map((val, key) => {
          return (
            <>
              <SwiperSlide className="swiper-slide">
                <img src={val.imgs} />
                <div className="title">{val.title}</div>
                <div className="date">{val.date}</div>
                <div className="text">
                  <p>{val.content}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
}

export default EventCard;
