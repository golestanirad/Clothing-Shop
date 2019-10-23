import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
///// project fiels
import MenuItem from "../menu-item/menu-itam.component";
import "./directory.styles.scss";
import { selectSections } from "../../redux/directory/directory.selector";

const directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => {
      return <MenuItem key={id} {...otherProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(directory);
