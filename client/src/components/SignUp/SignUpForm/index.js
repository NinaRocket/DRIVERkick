import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";

function SignUpForm() {
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const redirect = useHistory();

  // START Error States ——————————————————————————|
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);
  const [signupFail, setSignupFail] = useState(false);

  const emailValidator = () => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const passwordValidator = () => {
    if (!password === confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const requiredValidator = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setRequiredError(true);
    }
  };
  // END Error States ——————————————————————————|

  // START Input setStates ——————————————————————————|
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
  // END Input setStates ——————————————————————————|

  const submitUserSignup = (event) => {
    event.preventDefault();
    // Validators
    emailValidator();
    passwordValidator();
    requiredValidator();
    if (emailError) {
      return;
    } else if (passwordError) {
      return;
    }
    const userInfo = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    //request to server to add a new email/password
    API.signup(userInfo)
      .then((response) => {
        if (!response.data.errmsg) {
          //home for now
          redirect.push("/add-vehicle");
        }
      })
      .catch((error) => {
        setSignupFail(true)
        console.log(`login error: ${error}`);
      });
  };

  return (
    <div className="g__form-container">
      <form>
        <h2 className="g__form-title">Sign Up</h2>

        {/* Email Validation Error */}
        {emailError ? (
          <p className="text-center text-danger">
            Please make sure your email is formatted correctly.
          </p>
        ) : null}

        {/* Password Validation Error */}
        {passwordError ? (
          <p className="text-center text-danger">
            Please make sure your password matches.
          </p>
        ) : null}

        {/* Required Validation Error */}
        {requiredError ? (
          <p className="text-center text-danger">
            Please confirm all fields are filled out.
          </p>
        ) : null}

        {/* SignUp Failed Validation Error */}
        {signupFail ? (
          <p className="text-center text-danger">
            This email may have been used already, please try a different one.
          </p>
        ) : null}

        <div className="g__label-group">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`form-input ${
              requiredError ? "g__form-input-err" : null
              }`}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Jane"
            onChange={signupFirstNameValue}
            required
          />
        </div>
        <div className="g__label-group">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`form-input ${
              requiredError ? "g__form-input-err" : null
              }`}
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            onChange={signupLastNameValue}
            required
          />
        </div>
        <hr className="g__form-divider" />
        <div className="g__label-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className={`form-input ${emailError ? "g__form-input-err" : null} ${
              requiredError ? "g__form-input-err" : null
              }`}
            type="text"
            id="email"
            name="email"
            placeholder="you@email.com"
            // value={email}
            onChange={signupEmailValue}
            required
          />
        </div>
        <div className="g__label-group">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className={`form-input ${
              passwordError ? "g__form-input-err" : null
              } ${requiredError ? "g__form-input-err" : null}`}
            type="password"
            name="password"
            id="password"
            onChange={signupPasswordValue}
            required
          />
        </div>
        <div className="g__label-group">
          <label className="form-label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={`form-input ${
              passwordError ? "g__form-input-err" : null
              } ${requiredError ? "g__form-input-err" : null}`}
            type="password"
            placeholder="retype password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={signupConfirmPasswordValue}
            required
          />
        </div>

        <button
          className="btn g__form-submit-btn"
          onClick={submitUserSignup}
          type="submit"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
