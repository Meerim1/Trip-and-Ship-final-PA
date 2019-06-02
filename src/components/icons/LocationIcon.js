import React, { PureComponent } from "react";

class LocationIcon extends PureComponent {
  render() {
    return (
      <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        width="56px"
        height="56px"
        viewBox="0 0 24 24"
        ariaLabelledby="locationIconTitle locationIconDesc"
        stroke="#41c191"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        color="#41c191"
      >
        {" "}
        <title id="locationIconTitle">Location</title>{" "}
        <desc id="locationIconDesc">Icon of a map pin</desc>{" "}
        <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z" />{" "}
        <circle cx="12" cy="9" r="1" />{" "}
      </svg>
    );
  }
}
export default LocationIcon;
