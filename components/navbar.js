import React, { useEffect } from "react";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
//import { AiOutlineShoppingCart } from "react-icons/ai";
function NavBar() {
  const router = useRouter();
  return (
    <div className={styles.__nav_parent}>
      <div className={styles.__nav_child}>
        <div>
          <Image src="/brightness.png" width="200" height="200" alt="" />
        </div>
        <nav>
          <ul>
            <li className={router.pathname === "/" ? styles.linka : null}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/products" ? styles.linka : null}
            >
              <Link href="/products">
                <a>Our Products</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/advices" ? styles.linka : null}
            >
              <Link href="/advices">
                <a>Advices</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/gallery" ? styles.linka : null}
            >
              <Link href="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li
              className={router.pathname === "/contact" ? styles.linka : null}
            >
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
