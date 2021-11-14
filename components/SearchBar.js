import React, { useEffect, useRef } from "react";
import styles from "../styles/Main.module.scss";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { inactivetesearchbar } from "./redux/actionCreators/actions";
function SearchBar() {
  const search_ref = useRef(null);
  useEffect(() => {
    search_ref.current.focus();
  }, []);
  const dispatchserachoff = useDispatch();
  const variants = {
    showSearch: {
      transition: {
        staggerChildren: 0.66,
      },
    },
  };
  const itemsSearch = {
    showSearch: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [1, 2, -4, 0.2],
        duration: 0.66,
      },
    },
    hiddenSearch: {
      opacity: 0,
      y: -300,
    },
  };
  return (
    <div>
      <motion.div
        className={styles.searchbar_parent}
        variants={variants}
        initial="hiddenSearch"
        animate="showSearch"
      >
        <div>
          <motion.div className={styles.FaPowerOff} variants={itemsSearch}>
            <span
              onClick={() => {
                dispatchserachoff(inactivetesearchbar());
              }}
            >
              <FaPowerOff />
            </span>
          </motion.div>
          <motion.h1 variants={itemsSearch}>BRIGHTNESS</motion.h1>
          <motion.form variants={itemsSearch}>
            <div className={styles.handle_search_btntext}>
              <input
                ref={search_ref}
                type="text"
                name="searchbar"
                id="searchbar"
                placeholder="Search Our Products"
              />
              <div className={styles.btn_serach_handler}>
                <button>
                  <span>
                    <FaSearch />
                  </span>
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}

export default SearchBar;
