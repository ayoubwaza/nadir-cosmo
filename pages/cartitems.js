import React from "react";
import styles from "../styles/Main.module.scss";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector } from "react-redux";
function CartItems() {
  const cartItemsCheckout = useSelector((state) => state.cartReducer.products);
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
            {cartItemsCheckout.map((prod,i) => {return(
              <div key={i}>
                <div>
                  {prod.productPrice}
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartItems;
