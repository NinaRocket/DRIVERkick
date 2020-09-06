import React, { useState } from "react";
import './style.css'
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";

function LoginForm() {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const redirect = useHistory();

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
                // if successeful
                if (response.status === 200) {
                    // update App.js state to login
                    setLoggedIn(true);
                    setEmail(response.data.email);
                    // update the state to redirect to home
                    redirect.push("/add-vehicle");
                }
            })
            .catch((error) => {
                console.log("login error: ");
                console.log(error);
            });
    };


    return (
        <div className="g__form-container">
            <form>
                <h2 className="g__form-title">Login</h2>
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

                <button className="btn g__form-submit-btn" onClick={submitUserLogin} type="submit"
                >Login</button>

            </form>
        </div>
    );

}

export default LoginForm;