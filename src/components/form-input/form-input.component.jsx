import React from "react";
/// project files
import "./form-input.styles.scss";

const formInput = ({ onChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : null
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default formInput;
