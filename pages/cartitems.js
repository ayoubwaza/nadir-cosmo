import React, { useState } from "react";
import styles from "../styles/Main.module.scss";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../components/redux/actionCreators/actions";
import Image from "next/image";
import { IoTrashOutline } from "react-icons/io5";
function CartItems() {
  const cartItemsCheckout = useSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();
  let getPrices = [];
  const filtredNumber = () => {
    cartItemsCheckout.filter((x) => {
      getPrices.push(x.productPrice);
    });
    console.log(getPrices);
  };
  filtredNumber();
  return (
    <div>
      <style jsx global>
        {`
          body {
            height: 100%;
            width: 100%;
            margin: 0%;
            padding: 0%;
          }
        `}
      </style>
      <NavBar />
      <div className={styles.cartitems}>
        <div className={styles.cartitems_child}>
          <div>
            <h1>
              {cartItemsCheckout.length > 0
                ? "We are so Happy To have you here"
                : null}
            </h1>
            <div className={styles.handle_cartinCheckout}>
              {cartItemsCheckout.map((prod, i) => {
                return (
                  <div className={styles.__checkoutCart_prod} key={i}>
                    <div>
                      <Image
                        src={prod.productImg}
                        alt=""
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className={styles.content_prod_checkoutè_cart}>
                      <div>
                        <p>{prod.productName}</p>
                      </div>
                      <div>
                        <span
                          onClick={() => {
                            dispatch(removefromcart(prod.id));
                          }}
                        >
                          <IoTrashOutline />
                        </span>
                      </div>
                      <div>{prod.productPrice}</div>
                    </div> 
                  </div>
                );
              })}
            </div>
            <hr />
            <div>
              <p>
                {getPrices.reduce((accu, abb) => {
                  return accu + abb;
                }, 0)}{" "}
                Dh
              </p>
            </div>
          </div>
          {/* <div>{allPrice}</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartItems;
