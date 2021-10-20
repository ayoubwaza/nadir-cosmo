import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
export default function Home() {
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
              <p>
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit.
              </p>
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
                <button>
                  Discover More...
                </button>
              </div>
            </div>
            <div>
              <Image
                src="/section-2-women.webp"
                loading="lazy"
                width="440"
                height="560"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
