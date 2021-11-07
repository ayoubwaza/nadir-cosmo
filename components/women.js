import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
function Women() {
  const [amazighImg, setAmazighImg] = useState(false);
  const [defaultImg, setDefaultImg] = useState(false);
  const [makeupImg, setMakeUpImg] = useState(true);
  return (
    <div className={styles.__women_parent}>
      <div className={styles.__women_child}>
        <InView as="div" threshold={0.4}>
          {({ inView, ref, entry }) => (
            <motion.div
              ref={ref}
              className={styles.__women_content}
              initial={
                inView
                  ? null
                  : {
                      opacity: 0,
                      x: -120,
                    }
              }
              animate={
                inView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: {
                        ease: "easeInOut",
                        duration: 0.8,
                      },
                    }
                  : null
              }
            >
              <div className={styles.women_logo}>
                <Image
                  src="/brightness-3.png"
                  loading="lazy"
                  width="200"
                  height="100"
                  alt=""
                />
              </div>
              {defaultImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"imag"}
                  <br />
                  consectetur adipisicing elit.
                  <br />
                  possimus cumque eum sapiente quibusdam!
                  <br />
                  voluptates consectetur eveniet velit.
                </p>
              ) : amazighImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"amazighImg"}
                  <br />
                  consectetur adipisicing elit.
                  <br />
                  possimus cumque eum sapiente quibusdam!
                  <br />
                  voluptates consectetur eveniet velit.
                </p>
              ) : makeupImg ? (
                <p>
                  Lorem ipsum dolor sit amet {"makeupImg"}
                  <br />
                  consectetur adipisicing elit.
                  <br />
                  possimus cumque eum sapiente quibusdam!
                  <br />
                  voluptates consectetur eveniet velit.
                </p>
              ) : (
                <p>
                  Lorem ipsum dolor sit amet {"default One"}
                  <br />
                  consectetur adipisicing elit.
                  <br />
                  possimus cumque eum sapiente quibusdam!
                  <br />
                  voluptates consectetur eveniet velit.
                </p>
              )}

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
                          ease: "easeIn",
                          duration: 1.2,
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
  );
}

export default Women;
