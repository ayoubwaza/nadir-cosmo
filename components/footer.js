import React from "react";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.footer__parent}>
      <div className={styles.handle_footer_social_Media}>
        <div className={styles.social_media_footer}>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image src="/whatsapp.webp" width="32px" height="32px" alt="" />
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image src="/facebook.webp" width="32px" height="32px" alt="" />
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image src="/twitter.webp" width="32px" height="32px" alt="" />
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image
                  src="/instagram.webp"
                  width="32px"
                  height="32px"
                  alt=""
                />
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image src="/telegram.webp" width="32px" height="32px" alt="" />
              </span>
            </a>
          </Link>
          <Link href="/">
            <a className="links_arr">
              <span>
                <Image src="/youtube.webp" width="32px" height="32px" alt="" />
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer__child}>
        <div className={styles.each_ftr}>
          <h3>About Brightness</h3>
          <div>
            <ul>
              <li>Why Us?</li>
              <li>FAQS</li>
              <li>Refer A Friend</li>
            </ul>
          </div>
        </div>
        <div className={styles.each_ftr}>
          <h3>Quick Links</h3>
          <div>
            <ul>
              <li>Home</li>
              <li>Female Products</li>
              <li>Male Products</li>
            </ul>
          </div>
        </div>
        <div className={styles.each_ftr}>
          <h3>Contact Us</h3>
          <div>
            <ul>
              <li>By Telephone</li>
              <li>By Email</li>
              <li>Report a bug</li>
            </ul>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>WBrightness™ is a registered trademark © 2021 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
