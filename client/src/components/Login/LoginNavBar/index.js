import React from 'react';
import logo from "../../images/driverkicklogo.png";

function LoginNavBar() {
    return (
        <div>
            <Navbar className="container navbar justify-content-between flex-column flex-sm-row">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top"
                        alt="Drive Kick Logo"
                    />
                </Navbar.Brand>

                <Nav>
                    <Button className="btnGroup">Create Account</Button>
                </Nav>
            </Navbar>
        </div>
    );
}

export default LoginNavBar;