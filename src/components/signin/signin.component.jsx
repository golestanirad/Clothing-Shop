import React from "react";
/// project files
import "./signin.styles.scss";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password);     
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleOnChange}
            label="email"
          />

          <FormInput
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleOnChange}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit"> Submit </CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignin>
              Signin With google 
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
