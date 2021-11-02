import React from "react";
import styles from "../styles/Main.module.scss";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
function ProductsHome() {
  return (
    <div className={styles.parent__home_products}>
      <InView as="div">
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            className={styles.children__home_products}
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
            <div>
              <h1>Natural Products Only For You</h1>
            </div>
            <div>
              <Link href="/products">
                <a className="links_arr">
                  <button>Discover More</button>
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
}
export default ProductsHome;
