import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../../images/global/drive-kick-logo-tan.svg";

function LoginNavBar() {
    const createAccount = () => {
        // Should direct people to the sign up page
        console.log("createAccount button")
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
                    onClick={createAccount}
                >
                    Create Account
                        </button>

            </Nav>
        </Navbar>
    );
}

export default LoginNavBar;