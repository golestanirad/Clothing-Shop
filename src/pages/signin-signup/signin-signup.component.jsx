import React from "react";
/// project files
import "./signin-signup.styles.scss";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/signup/signup.component";

const signInSignUp = () => {
  return (
    <div className="signin-signup">
      <Signin />
      <Signup />
    </div>
  );
};

export default signInSignUp;
