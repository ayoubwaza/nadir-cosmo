import "../styles/globals.scss";
import React, { useEffect, useRef } from "react";
function MyApp({ Component, pageProps }) {
  const ref_cursur = useRef(null);
  useEffect(() => {
  ref_cursur.current.style.display = "none"

    document.addEventListener("mousemove", (e) => {
    ref_cursur.current.style.display = "block"
      let x = e.clientX;
      let y = e.clientY;
      ref_cursur.current.style.left = `${x}px`;
      ref_cursur.current.style.top = `${y}px`;
    });
  })
  return (
    <div>
      <div ref={ref_cursur} className="cursura"></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
