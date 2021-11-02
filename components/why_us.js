import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Main.module.scss";
import Lottie from "lottie-web";
import whyusAni from "../public/Animations/whyusAnimation.json";
import { MdVerifiedUser } from "react-icons/md";
function WhyUs() {
  const anima = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anima.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: whyusAni,
    });
    Lottie.setSpeed(1.2);
    return () => {
      Lottie.destroy();
    };
  }, []);
  return (
    <div className={styles.parent_why_us}>
      <h1>Why Us</h1>
      <div className={styles.child_why_us}>
        <div className={styles.options_why_us}>
          <ul>
            <li>
              <span>
                <MdVerifiedUser />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <span>
                <MdVerifiedUser />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <span>
                <MdVerifiedUser />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <span>
                <MdVerifiedUser />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              <span>
                <MdVerifiedUser />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
        <div ref={anima} className={styles.whu_us_anima}></div>
      </div>
    </div>
  );
}
export default WhyUs;