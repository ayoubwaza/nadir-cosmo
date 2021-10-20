import React from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
function Products() {
  return (
    <div>
      <NavBar />
      <div className={styles.__product}></div>
    </div>
  );
}
export default Products;