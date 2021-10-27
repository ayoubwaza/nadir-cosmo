import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import React, { useState, useEffect, useRef } from "react";
import ProductsHome from "../components/productsHome";
import WhyUs from "../components/why_us";
import Beintouch from "../components/beInTouch";
export default function Home() {
  const [amazighImg, setAmazighImg] = useState(false);
  const [defaultImg, setDefaultImg] = useState(false);
  const [makeupImg, setMakeUpImg] = useState(true);
  const variants = {
    init: {
      opacity: 0,
    },
    anim: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const TitleItems = {
    init: {
      opacity: 0,
      y: 60,
    },
    anim: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 20,
      },
    },
  };
  return (
    <div>
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
          <motion.h1 variants={TitleItems}>We Don't Sell Cosmetics,</motion.h1>
          <motion.h1 variants={TitleItems}>We Sell Hope</motion.h1>
          <br />
          <motion.div className={styles.__hero_btn} variants={TitleItems}>
            <button>VISIT OUR STORE</button>
          </motion.div>
        </motion.div>
      </div>
      <section id="women">
        <div className={styles.__women_parent}>
          <div className={styles.__women_child}>
            <div className={styles.__women_content}>
              <h2>Brightness</h2>
              {defaultImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"imag"}
                  <br />
                  consectetur adipisicing elit.
                </p>
              ) : amazighImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"amazighImg"}
                  <br />
                  consectetur adipisicing elit.
                </p>
              ) : makeupImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"makeupImg"}
                  <br />
                  consectetur adipisicing elit.
                </p>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet {"default One"}
                  <br />
                  consectetur adipisicing elit.
                </p>
              )}
              <div>
                <Image
                  src="/brightness.png"
                  loading="lazy"
                  width="200"
                  height="200"
                  alt=""
                />
              </div>
              <div className={styles.__women_btn}>
                <button>Discover More...</button>
              </div>
            </div>
            <div className={styles.women_section_image}>
              <div className={styles.one_section_womenImg}>
                <motion.div
                  className={styles.img_2}
                  onMouseEnter={() => {
                    setMakeUpImg(true);
                  }}
                  onMouseLeave={() => {
                    setMakeUpImg(false);
                  }}
                >
                  <Image
                    src="/sec-2.jpg"
                    loading="lazy"
                    width="240"
                    height="360"
                    alt=""
                  />
                </motion.div>
                <motion.div className={styles.img_1}>
                  <Image
                    src="/sec-4.webp"
                    loading="lazy"
                    width="240"
                    height="360"
                    alt=""
                  />
                </motion.div>
                <motion.div
                  onMouseLeave={() => {
                    setAmazighImg(false);
                  }}
                  onMouseEnter={() => {
                    setAmazighImg(true);
                  }}
                  className={styles.img_4}
                >
                  <Image
                    src="/amazigh.jpg"
                    loading="lazy"
                    width="240"
                    height="360"
                    alt=""
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hold_productshome">
        <ProductsHome />
      </section>
      <section id="getintouch">
        <Beintouch />
      </section>
      {/* <section id="whus">
        <WhyUs/>
      </section> */}
    </div>
  );
}
