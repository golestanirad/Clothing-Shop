import React from "react";
//// project fiels
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

const homepage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

export default homepage;
