import React, { useState } from "react";
import styles from "../styles/Main.module.scss";
import Image from "next/image";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");

  const passwordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.loginIn_parent}>
      <div className={styles.loginIn_child}>
        <h1>Welcome Back Again !</h1>
        <div className={styles.login_content_jForm}>
          <div className={styles.loginSVG}>
            <Image src="/Login.svg" width="400" height="400" alt="" />
          </div>
          <div>
            <form>
              <div className={styles.finger_Print}>
                <Image src="/fingerPrint.svg" width="200" height="200" alt="" />
              </div>
              
              <div className={styles.form_inpu_handler_login}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
                <span>
                  <BiUserCircle />
                </span>
              </div>
              <div className={styles.form_inpu_handler_login}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                {showPassword ? (
                  <span onClick={() => passwordVisibility()}>
                    <FaRegEye />
                  </span>
                ) : (
                  <span onClick={() => passwordVisibility()}>
                    <FaRegEyeSlash />
                  </span>
                )}
              </div>
              <div>
                <button>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
