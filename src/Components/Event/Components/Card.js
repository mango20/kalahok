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
        className="mySwiper"
      >
        {eventCont.map((val, key) => {
          return (
            <>
              <SwiperSlide className="swiper-slide">
                <div className="title">
                  <img src={val.imgs} />
                  <h3>{val.title}</h3>
                  <h6>{val.date}</h6>
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
