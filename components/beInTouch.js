import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Main.module.scss";
import BeInTouchAnimation from "../public/Animations/beintouch.json";
import Lottie from "lottie-web";
function Beintouch(props) {
  const [mail, setMail] = useState("");
  const beintoucref = useRef(null);
  console.log(props);
  useEffect(() => {
    Lottie.loadAnimation({
      container: beintoucref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: BeInTouchAnimation,
    });
    Lottie.setSpeed(1.2);
    return () => {
      Lottie.destroy();
    };
  }, []);
  return (
    <div>
      <div className={styles.parent_beintouch}>
        <div className={styles.child__get_g}>
          <h3>GET IN TOUCH</h3>
          <div ref={beintoucref} className={styles.beintouch_anima}></div>
          <h1>Sign Up To Get Notified For New Products</h1>
          <h2>No Spam, We Promise</h2>
          <div className={styles.child_getintouch}>
            <div>
              <form className={styles.form_getintouch}>
                {" "}
                <div>
                  <input
                    type="text"
                    placeholder="@example.com"
                    value={mail}
                    onChange={(e) => {
                      setMail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className={styles.submit_getintouch}>
                  <button>Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Beintouch;
