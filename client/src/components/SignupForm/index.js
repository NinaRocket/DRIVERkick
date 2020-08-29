import React, { useState } from "react";
//import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function SignupForm() {
  const [email, setEmail] = useState([]);
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const signupEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const signupFirstNameValue = (event) => {
    setFirstName(event.target.value);
  };

  const signupLastNameValue = (event) => {
    setLastName(event.target.value);
  };

  const signupPasswordValue = (event) => {
    setPassword(event.target.value);
  };

  const signupConfirmPasswordValue = (event) => {
    setConfirmPassword(event.target.value);
  };
  const submitUserSignup = (event) => {
    console.log("sign-up handleSubmit, email: ");
    console.log(email);
    event.preventDefault();
    console.log(email, firstName, lastName, password);
    const userInfo = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    //request to server to add a new email/password
    API.signup(userInfo)
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.state({
            //redirect to login page
            //home for now
            redirectTo: "/home",
          });
        } else {
          console.log("email already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  return (
    <div className="SignupForm">
      <h4>Sign up</h4>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="email">
              email
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={signupEmailValue}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="firstName">
              First Name:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={signupFirstNameValue}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="lastName">
              Last Name:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={signupLastNameValue}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="password">
              Password:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={signupPasswordValue}
            />
          </div>
        </div>
        <div className="col-1 col-ml-auto">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password:{" "}
          </label>
        </div>
        <div className="col-3 col-mr-auto">
          <input
            className="form-input"
            placeholder="retype password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={signupConfirmPasswordValue}
          />
        </div>

        <div className="form-group ">
          <div className="col-7"></div>
          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={submitUserSignup}
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
