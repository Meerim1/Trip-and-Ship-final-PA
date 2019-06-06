import React, { PureComponent } from "react";

class BoxIcon extends PureComponent {
  render() {
    return (
      <svg
      
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="120px"
        height="120px"
        viewBox="0 0 24 24"
        ariaLabelledby="inboxIconTitle inboxIconDesc"
        stroke="#7a8384"
        strokeWidth="0.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        color="#7a8384"
      >
        {" "}
        <title id="inboxIconTitle">Фото товара отсутствует</title>{" "}
        <desc id="inboxIconDesc">Icon of cards sorting inbox</desc>{" "}
        <path strokeLinecap="round" d="M3 10h6v3h6v-3h6" />{" "}
        <path d="M3 10l3-6h13l2 6v10H3z" />{" "}
      </svg>
    );
  }
}
export default BoxIcon;
