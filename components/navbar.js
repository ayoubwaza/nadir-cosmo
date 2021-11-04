import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import navMobile from "../public/Animations/controleNavbar.json";
import Lottie from "lottie-web";
import { FaCartPlus, FaHeart, FaSearch } from "react-icons/fa";
function NavBar() {
  const anima_navbar = useRef(null);
  const [controleLottieMenu, setControleLottieMenu] = useState(false);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anima_navbar.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: navMobile,
    });
    Lottie.setSpeed(1.2);
    return () => {
      Lottie.destroy();
    };
  }, []);
  const router = useRouter();
  const handleMenuAnimation = () => {
    setControleLottieMenu(!controleLottieMenu);
  };
  const clickedLottie = () => {
    if (controleLottieMenu === true) {
      Lottie.setSpeed(1.9);
      Lottie.play();
      Lottie.setDirection(1);
    } else if (controleLottieMenu === false) {
      Lottie.setSpeed(1);
      Lottie.play();
      Lottie.setDirection(-1);
    } else {
      return null;
    }
  };
  useEffect(() => {
    clickedLottie();
  }, [controleLottieMenu]);
  return (
    <div className={styles.__nav_parent}>
      <div className={styles.cart_with_logo}>
        <div className={styles.nav__logo}>
          <Image src="/brightness - 3.png" width="200" height="80" alt="" />
        </div>
        <div className={styles.map_heart}>
        <div>
            <span >
              <FaSearch />
            </span>
          </div>
          <div>
            <span className={styles.cart}>
              <FaCartPlus />
            </span>
          </div>
          <div>
            <span>
              <FaHeart />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.__nav_child}>
        <nav className="target">
          <ul>
            <li className={router.pathname === "/" ? styles.linka : null}>
              <Link href="/">
                <a className="links_arr">Home</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/products" ? styles.linka : null}
            >
              <Link href="/products">
                <a className="links_arr">Our Products</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/advices" ? styles.linka : null}
            >
              <Link href="/advices">
                <a className="links_arr">About</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/gallery" ? styles.linka : null}
            >
              <Link href="/gallery">
                <a className="links_arr">Gallery</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/reviews" ? styles.linka : null}
            >
              <Link href="/reviews">
                <a className="links_arr">Reviews</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/contact" ? styles.linka : null}
            >
              <Link href="/contact">
                <a className="links_arr">Contact</a>
              </Link>
            </li>
          </ul>
          <div
            className={styles.nav_mobile}
            onClick={() => handleMenuAnimation()}
            ref={anima_navbar}
          ></div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
