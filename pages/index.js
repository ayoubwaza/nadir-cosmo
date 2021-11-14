import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import React from "react";
import ProductsHome from "../components/productsHome";
import Beintouch from "../components/beInTouch";
import Typewriter from "typewriter-effect";
import SLiderImg from "../components/sliders_Img";
import Footer from "../components/footer";
import Link from "next/link";
import MarqueeSider from "../components/MarqueeSider";
import Women from "../components/women";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
export default function Home() {
  const selectorSearch = useSelector((state) => state.searchBarReducer.isBarActive);
  const variants = {
    anim: {
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const TitleItems = {
    init: {
      opacity: 0,
      y: 100,
    },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 10,
        bounce: 100,
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <div>
      {selectorSearch ? <SearchBar /> : null}
      <Head>
        <title>Web App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.__hero_parent}>
        <motion.div
          className={styles.__hero_child}
          variants={variants}
          initial="init"
          animate="anim"
        >
          <motion.h1 variants={TitleItems}>
            We Don't Sell <span className="__Trash">Trash</span>,
          </motion.h1>
          <motion.h1 variants={TitleItems}>
            We Sell
            <Typewriter
              options={{
                delay: 66,
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString("Hope!").pauseFor(2500).deleteAll();
                typewriter.typeString("Beauty!").pauseFor(2500).deleteAll();
                typewriter
                  .typeString("Quality!")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
          </motion.h1>
          <div className={styles.para_absolu}>
            <p id="para_absolu">Be U , Be _Different</p>
          </div>
          <motion.div className={styles.__hero_btn} variants={TitleItems}>
            <div className={styles.image_widthbtn}>
              <Image
                src="/brightness-3.png"
                width="100px"
                height="100px"
                alt=""
              />
            </div>
            <Link href="/products">
              <a className="links_arr">
                <button>VISIT OUR STORE</button>
              </a>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <section id="women">
        <Women />
      </section>
      <section id="hold_productshome">
        <ProductsHome />
      </section>
      <div id="sliders">
        <SLiderImg />
      </div>
      <section id="marquee-slider">
        <MarqueeSider />
      </section>
      <section id="getintouch">
        <Beintouch />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
