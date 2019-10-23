import React from "react";
/// project fiels
import "./custom-button.styles.scss";

const customButton = ({ children, googleSignin, inverted, ...otherProps }) => {
  return(
  <button
    className={`${inverted ? "inverted " : ""} ${
      googleSignin ? "google-signin" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)};

export default customButton;
