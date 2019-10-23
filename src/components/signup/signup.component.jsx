import React from "react";
/// project files
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, creatUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.styles.scss";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
      
   
    e.preventDefault();
   
    const { displayName, email, password, confirmPassword } = this.state;
   
    if (password !== confirmPassword) {
      alert("password doesn't match with");
      return;
    }
      
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
  
    await creatUserProfileDocument(user, {displayName});
  
    this.setState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
   
  };

  render() {
    return (
      <div className="signup">
        <h1>I don't have an account</h1>
        <span>signup with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            onChange={this.handleInputChange}
            value={this.state.displayName}
            name="displayName"
            label="Name"
            type="text"
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="Email"
            value={this.state.email}
            name="email"
            type="email"
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="Password"
            value={this.state.password}
            name="password"
            type="password"
            required
          />
          <FormInput
            onChange={this.handleInputChange}
            label="Confirm Password"
            value={this.state.confirmPassword}
            name="confirmPassword"
            type="password"
            required
          />
          <CustomButton type="submit">Signup</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
