import React, { useEffect, useRef } from "react";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import styles from "../styles/Main.module.scss";
import animationContactUs from "../public/Animations/contact-us.json";
import Lottie from "lottie-web";
import withAuth from "../components/withAuth";
function Contact() {
  const animaContact = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: animaContact.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationContactUs,
    });
    Lottie.setSpeed(1.2);
    return () => {
      Lottie.destroy();
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className={styles.__contact_parent}>
        <h1>CONTACT US</h1>
        <div className={styles.__contact_child}>
          <div className={styles.handle_anima_contact} ref={animaContact}></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default withAuth(Contact);
