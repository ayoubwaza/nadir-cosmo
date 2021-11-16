import React, { useEffect } from "react";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import ProductsData from "../components/product.json";
import { FaCartPlus } from "react-icons/fa";
import { addtocart } from "../components/redux/actionCreators/actions";
import Footer from "../components/footer";
function Products() {
  const selectorSearch = useSelector(
    (state) => state.searchBarReducer.isBarActive
  );
  const dispatchCart = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  console.log(cartState, selectorSearch);
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
      <div className={styles.__products_data}>
        <div className={styles.__products_data_child}>
          {ProductsData.map((prod, i) => {
            return (
              <div className={styles.__product_cart} key={i}>
                <div>
                  <Image
                    src={prod.productImg}
                    width="180"
                    height="180"
                    alt=""
                  />
                </div>
                <h1>{prod.productName}</h1>
                <h2>{prod.productPrice + "Dh"}</h2>
                <div className={styles.__product_cart_btn}>
                  <button
                    onClick={() =>
                      dispatchCart(
                        addtocart(
                          prod.id,
                          prod.productImg,
                          prod.productName,
                          prod.productPrice
                        )
                      )
                    }
                  >
                    <span>
                      <FaCartPlus />
                    </span>
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Products;
