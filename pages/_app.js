import "swiper/swiper.scss";
import "../styles/globals.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import React, { useEffect, useRef } from "react";
function MyApp({ Component, pageProps }) {
  const ref_cursur = useRef(null);
  useEffect(() => {
    var links = document.querySelectorAll(".links_arr");
    const trashHome = document.getElementsByClassName("__Trash")[0];
    if(trashHome){
      trashHome.addEventListener("mouseenter", () => {
        ref_cursur.current.style.transform = "scale(4)";
      });
      trashHome.addEventListener("mouseleave", () => {
        ref_cursur.current.style.transform = "scale(1)";
      });
    }else{
      return null;
    }
    links.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        ref_cursur.current.style.transform = "scale(4)";
      });
      el.addEventListener("mouseleave", () => {
        ref_cursur.current.style.transform = "scale(1)";
      });
    });
    ref_cursur.current.style.display = "none";
    document.addEventListener("mousemove", (e) => {
      ref_cursur.current.style.display = "block";
      let x = e.clientX;
      let y = e.clientY;
      ref_cursur.current.style.left = `${x}px`;
      ref_cursur.current.style.top = `${y}px`;
    });
  });
  return (
    <div>
      <div ref={ref_cursur} className="cursura"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
