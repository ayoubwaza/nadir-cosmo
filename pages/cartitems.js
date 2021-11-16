import React from "react";
import styles from "../styles/Main.module.scss";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector, useDispatch } from "react-redux";
import { removefromcart } from "../components/redux/actionCreators/actions";
import Image from "next/image";
function CartItems() {
  const cartItemsCheckout = useSelector((state) => state.cartReducer.products);
  const dispatch = useDispatch();
  const filtredNumber = cartItemsCheckout.filter((x) => {
    //filtering the data and using only numbners
  });
  console.log(filtredNumber);
  //getPrices()
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
            {cartItemsCheckout.map((prod, i) => {
              return (
                <div className={styles.__checkoutCart_prod} key={i}>
                  <div>
                    <Image
                      src={prod.productImg}
                      alt=""
                      width="200"
                      height="200"
                    />
                  </div>
                  <div>
                    <div>
                      <p>{prod.productName}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          dispatch(removefromcart(prod.id));
                        }}
                      >
                        Remove From Cart
                      </button>
                    </div>
                    <div>{prod.productPrice}</div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div>{allPrice}</div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartItems;
