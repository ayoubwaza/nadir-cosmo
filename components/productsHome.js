import React from "react";
import styles from "../styles/Main.module.scss";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
function ProductsHome() {
  return (
    <div className={styles.parent__home_products}>
      <div className={styles.children__home_products}>
        <div>
          <h1>Natural Products Only For You</h1>
        </div>
        <div className={styles.__home__product_first_three}>
          <div className={`${styles.child_each_fThree_prod} ${styles.e_same}`}>
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Bracelet</h3>
            </div>
          </div>
          <div
            className={`${styles.child_each_fThree_prod} ${styles.e_sameTwo}`}
          >
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Watch</h3>
            </div>
          </div>
          <div
            className={`${styles.child_each_fThree_prod} ${styles.e_sameThree}`}
          >
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Lipstick</h3>
            </div>
          </div>
        </div>
        <div className={styles.__home__product_first_three}>
          <div className={`${styles.child_each_fThree_prod} ${styles.e_sameFour}`}>
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Shoes</h3>
            </div>
          </div>
          <div
            className={`${styles.child_each_fThree_prod} ${styles.e_sameFive}`}
          >
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Rings</h3>
            </div>
          </div>
          <div
            className={`${styles.child_each_fThree_prod} ${styles.e_sameSex}`}
          >
            <div className={styles.handle_content_pro_each}>
              <span>
                <AiOutlineArrowRight />
              </span>
              <h3>Robes</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductsHome;
