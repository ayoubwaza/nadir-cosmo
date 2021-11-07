import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
function About() {
  return (
    <>
      <NavBar />
      <motion.div
        className={styles.__about}
        animate={{
          background: ["rgb(#FFF)", "#00aeef"],
          transition: {
            stiffness: 20,
            type: "spring",
            delay: 0.77,
          },
        }}
        initial={{ backgroundColor: ["rgb(#FFF)"] }}
      >
        <div className={styles.__about_child}>
          <div>
            <h1>brightness</h1>
          </div>
          <div className={styles.__about_child_content}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Unde sed assumenda corporis necessitatibus <br />
                vel praesentium soluta aspernatur hic? Nisi nam itaque porro
                <br /> corrupti dolorum nihil beatae sapiente,
                <br />
                iure aspernatur illo!
              </p>
            </div>
            <div>
              <Image src="/about-img1.jpg" width="340" height="460" alt="" />
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default About;
