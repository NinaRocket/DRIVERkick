import React, { useState } from "react";
import './style.css'
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";

function LoginForm() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [redirectTo, setRedirectTo] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);

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
                    setLoggedIn(true);
                    setEmail(response.data.email);
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
            <div className="g__form-container">
                <form>
                    <div className="g__label-group">
                        <label className="form-label" htmlFor="email">
                            Email
                             </label>

                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="you@email.com"
                            value={email}
                            onChange={userEmailValue}
                        />

                    </div>
                    <div className="g__label-group">

                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={userPasswordValue}
                        />

                    </div>

                    <button className="btn btn-primary" onClick={submitUserLogin} type="submit"
                    >Login</button>

                </form>
            </div>
        );
    }
}

export default LoginForm;