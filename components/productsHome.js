import React from "react";
import styles from "../styles/Main.module.scss";
import Link from 'next/link';
function ProductsHome() {
  return (
    <div className={styles.parent__home_products}>
      <div className={styles.children__home_products}>
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
      </div>
    </div>
  );
}
export default ProductsHome;
