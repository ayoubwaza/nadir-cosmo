import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
function Products() {
  const [arr, setArr] = useState([]);
  const [d, setD] = useState("dada");
  useEffect(() => {
    console.log(arr);
  }, [arr]);
  const WhenClick = (d = "kjkljkljlk") => {
    setArr([...arr,{d}])
  };
  return (
    <div>
      <NavBar />
      <div className={styles.__product}>
        <h3>{d}</h3>
        <button
          onClick={() => {
            WhenClick();
          }}
        >
          the length of my list is ? : `{">"}` : {arr.length}
        </button>
      </div>
    </div>
  );
}
export default Products;
