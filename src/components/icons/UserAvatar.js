import React, { PureComponent } from "react";

class UserAvatar extends PureComponent {
  render() {
    return (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        aria-labelledby="userIconTitle userIconDesc"
        stroke="#7a8384"
        stroke-width="1.2857142857142858"
        stroke-linecap="square"
        stroke-linejoin="miter"
        fill="none"
        color="#7a8384"
      >
        {" "}
        <title id="userIconTitle">User</title>{" "}
        <desc id="userIconDesc">
          Icon of a portait shape closed in a circle
        </desc>{" "}
        <path
          stroke-linecap="round"
          d="M5.5,19.5 C7.83333333,18.5 9.33333333,17.6666667 10,17 C11,16 8,16 8,11 C8,7.66666667 9.33333333,6 12,6 C14.6666667,6 16,7.66666667 16,11 C16,16 13,16 14,17 C14.6666667,17.6666667 16.1666667,18.5 18.5,19.5"
        />{" "}
        <circle cx="12" cy="12" r="10" />{" "}
      </svg>
    );
  }
}
export default UserAvatar;
