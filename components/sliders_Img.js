import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs.js";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import styles from "../styles/Main.module.scss";
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

export default function SLiderImg() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        aut
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.each_slider}></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
