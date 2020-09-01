import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../images/global/drive-kick-logo-tan.svg";

function SignUpNavBar() {
    const login = () => {
        // Should direct people to the login page
        console.log("login button")
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

                <button
                    type="button"
                    className="btn"
                    onClick={login}
                >
                    Login
                        </button>

            </Nav>
        </Navbar>
    );
}

export default SignUpNavBar;