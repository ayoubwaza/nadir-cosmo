import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import React, { useEffect, useState } from "react";
import ProductsHome from "../components/productsHome";
import Beintouch from "../components/beInTouch";
import Typewriter from "typewriter-effect";
import SLiderImg from "../components/sliders_Img";
import Footer from "../components/footer";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import MarqueeSider from "../components/MarqueeSider";
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
      y: 55,
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
          <br />
          <motion.div className={styles.__hero_btn} variants={TitleItems}>
            <div className={styles.image_widthbtn}>
              <Image
                src="/brightness - 3.png"
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
        <div className={styles.__women_parent}>
          <div className={styles.__women_child}>
            <InView as="div" threshold={0.4}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className={styles.__women_content}
                  initial={
                    inView
                      ? null
                      : {
                          opacity: 0.7,
                          x: -120,
                        }
                  }
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 10,
                          },
                        }
                      : null
                  }
                >
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
                </motion.div>
              )}
            </InView>
            <div className={styles.women_section_image}>
              <InView as="div" threshold={0.4}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    className={styles.one_section_womenImg}
                    initial={
                      inView
                        ? null
                        : {
                            opacity: 0,
                            y: 20,
                          }
                    }
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: {
                              type: "spring",
                              stiffness: 10,
                            },
                          }
                        : null
                    }
                  >
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
                  </motion.div>
                )}
              </InView>
            </div>
          </div>
        </div>
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
