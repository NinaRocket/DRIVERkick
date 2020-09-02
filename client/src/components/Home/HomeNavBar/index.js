import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../images/global/drive-kick-logo-dark.svg";

function HomeNavBar() {
    const signUp = () => {
        console.log("SignUp button")
    }
    const login = () => {
        console.log("Login button")
    }
    return (

        <Navbar className="container navbar justify-content-between flex-column flex-sm-row">
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    className="d-inline-block align-top"
                    alt="Drive Kick Logo"
                />
            </Navbar.Brand>
            <Nav>
                <div className="g__nav-btn-group">
                    <button
                        id="signupBtn"
                        type="button"
                        className="btn"
                        onClick={signUp}
                    >
                        Get Started
                        </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={login}
                    >
                        Login
                        </button>
                </div>
            </Nav>
        </Navbar>

    );
}

export default HomeNavBar;