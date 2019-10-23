import React from "react";
import { withRouter } from "react-router-dom"; //
/// project files
import "./menu-item.styles.scss";

const menuItem = props => {
  console.log(2222, props);
  return (
    <div
      className={`${props.size} menu-item`}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      onClick={() => props.history.push(`/shop/${props.title}`)}
    >
      <div className="content">
        <div className="title">{props.title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(menuItem);
