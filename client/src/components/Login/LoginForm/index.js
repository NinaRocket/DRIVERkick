import React, { useState, useEffect } from "react";
import './style.css'
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function LoginForm() {
    // Context import
    const { logout } = useDriverKickContext();

    // Stores form values
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    // Not sure what this does
    const [loggedIn, setLoggedIn] = useState(false);

    // Stores vehicle info from the database
    const [vehicleInfo, setVehicleInfo] = useState([]);

    // Sets up page redirect 
    const history = useHistory();


    // START Error States ——————————————————————————|
    const [emailError, setEmailError] = useState(false);

    const emailValidator = () => {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
        ) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }
    // END Error States ——————————————————————————|


    // START Email Value Capture —————————————————|
    const userEmailValue = (event) => {
        setEmail(event.target.value);
    };

    const userPasswordValue = (event) => {
        setPassword(event.target.value);
    };
    // END Email Value Capture —————————————————|



    // START GET Vehicle API —————————————————|
    const checkUserVehicles = () => {
        API.getVehicles()
            .then((res) => {
                if (res.data.isAuthenticated === false) {
                    return logout(history);
                }
                setVehicleInfo(res.data[0]);
                console.log(vehicleInfo)
            })
            .catch((err) => console.log(err));
    }
    // END GET Vehicle API —————————————————|


    const submitUserLogin = (event) => {
        event.preventDefault();
        console.log("handleSubmit");

        // Email Validation
        emailValidator()
        if (emailError) {
            return;
        }

        API.login(email, password)
            .then((response) => {
                console.log("login response: ");
                console.log(response);
                // if successeful
                if (response.status === 200) {
                    // update App.js state to login
                    setLoggedIn(true);
                    setEmail(response.data.email);
                   
                    // Calls Vehicle API to see if there are any vehicles stored yet.
                    checkUserVehicles();
                    
                    // Validates which page to send the user too, if they have vehicles or not
                    vehicleInfo.length === 0 ? history.push("/user-dashboard") : history.push("/add-vehicle");
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

                {emailError ? <p className="text-center text-danger">Please make sure your email is formatted correctly.</p> : null}
                <div className="g__label-group">
                    <label className="form-label" htmlFor="email">
                        Email
                             </label>

                    <input
                        className={`form-input ${emailError ? "g__form-input-err" : null}`}
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