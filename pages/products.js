import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

function Products() {
  const selectorSearch = useSelector((state) => state.isBarActive);
  useEffect(() => {
    console.log("arr");
  }, []);
  return (
    <div>
      {selectorSearch ? <SearchBar /> : null}
      <NavBar />
      <div className={styles.__products}>
        <div className={styles.__products_child}>
          <div className={styles.__products_child_content}>
            <div className={styles.__products_logoimg}>
              <Image src="/brightness-3.png" width="200" height="80" alt="" />
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Excepturi natus modi dolorum facilis quo molestias sapiente
                <br />
                recusandae aperiam ratione maiores exercitationem repudiandae
                <br />
                vero possimus ad in, sunt doloremque et atque!
              </p>
            </div>
            <div>
              <button>Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
