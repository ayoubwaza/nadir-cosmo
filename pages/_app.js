import "swiper/swiper.scss";
import "../styles/globals.scss";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";

import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import { Provider } from "react-redux";
import store from "../components/redux/store";
function MyApp({ Component, pageProps }) {
  console.log(store);
  const ref_cursur = useRef(null);
  const ref_sidetotop = useRef(null);
  //links while hovering on'em
  const LinksMouseEffect = () => {
    var links = document.querySelectorAll(".links_arr");
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
  };
  //home page styling trash
  const TrashHomeWord = () => {
    const trashHome = document.getElementsByClassName("__Trash")[0];
    if (trashHome) {
      trashHome.addEventListener("mouseenter", () => {
        ref_cursur.current.style.transform = "scale(4)";
      });
      trashHome.addEventListener("mouseleave", () => {
        ref_cursur.current.style.transform = "scale(1)";
      });
    } else {
      return null;
    }
  };
  //aside button to top
  const asideButtonToTop = () => {
    const aside_top = document.getElementsByClassName("aside_top")[0];
    document.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        aside_top.style.display = "flex";
      } else {
        aside_top.style.display = "none";
      }
    });
    aside_top.addEventListener("mouseenter", () => {
      ref_cursur.current.style.transform = "scale(4)";
    });
    aside_top.addEventListener("mouseleave", () => {
      ref_cursur.current.style.transform = "scale(1)";
    });
  };
  //be _different
  const beDif = () => {
    const be_different = document.getElementById("para_absolu");
    if (be_different) {
      be_different.addEventListener("mouseenter", () => {
        ref_cursur.current.style.transform = "scale(4)";
      });
      be_different.addEventListener("mouseleave", () => {
        ref_cursur.current.style.transform = "scale(1)";
      });
    } else {
      return null;
    }
  };
  useEffect(() => {
    asideButtonToTop();
    TrashHomeWord();
    LinksMouseEffect();
    beDif();
  });
  return (
    <div>
      <div ref={ref_cursur} className="cursura"></div>
      <div
        onClick={() => {
          animateScroll.scrollToTop({
            spy: true,
            smooth: true,
            hashSpy: true,
            offset: 50,
            duration: 500,
          });
        }}
        ref={ref_sidetotop}
        className="aside_top"
      >
        <span>
          <FaArrowUp />
        </span>
      </div>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
