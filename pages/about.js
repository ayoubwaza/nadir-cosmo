import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
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
            <h3>brightness</h3>
          </div>
          <div className={styles.__about_child_content}>
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
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default About;
