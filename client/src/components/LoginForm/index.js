import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//import axios from 'axios'
import API from "../../utils/API";

//functional component using hooks

function LoginForm() {
  //email is variable that holds the state, setEmail is a method that sets the state, puts data into email
  //useState holds the initial state
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [redirectTo, setRedirectTo] = useState(null);

  // this.handleSubmit = this.handleSubmit.bind(this)
  // this.handleChange = this.handleChange.bind(this)

  const userEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const userPasswordValue = (event) => {
    setPassword(event.target.value);
  };
  const submitUserLogin = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    API.login(email, password)
      .then((response) => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            email: response.data.email,
          });
          // update the state to redirect to home
          setRedirectTo("/userpage");
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <div>
        <h4>Login</h4>
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
                onChange={userEmailValue}
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
                onChange={userPasswordValue}
              />
            </div>
          </div>
          <div className="form-group ">
            <div className="col-7"></div>
            <button
              className="btn btn-primary col-1 col-mr-auto"
              onClick={submitUserLogin}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
