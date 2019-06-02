import React, { PureComponent } from "react";

class TelegramIcon extends PureComponent {
  render() {
    return (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="56px"
        height="56px"
        viewBox="0 0 24 24"
        ariaLabelledby="repeatIconTitle repeatIconDesc"
        stroke="#d0d0f5"
        strokeWidth="1.2857142857142858"
        strokeLinecap="round"
        strokeLinejoin="miter"
        fill="none"
        color="#d0d0f5"
      >
        {" "}
        <title id="repeatIconTitle">Repeat</title>{" "}
        <desc id="repeatIconDesc">play the currently active set on repeat</desc>{" "}
        <path d="M2,13.0399239 L2,11 C2,7.6862915 4.6862915,5 8,5 L21,5" />{" "}
        <polyline points="20 3 22 5 20 7 20 7" />{" "}
        <path d="M22,9.98003805 L22,12.019962 C22,15.3336705 19.3137085,18.019962 16,18.019962 L3,18.019962" />{" "}
        <polyline points="4 20.02 2 18.02 4 16.02 4 16.02" />{" "}
      </svg>
    );
  }
}
export default TelegramIcon;
