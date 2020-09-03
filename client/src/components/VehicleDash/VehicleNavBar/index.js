import React from 'react';
import "./style.css";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Logo from "../../../images/global/drive-kick-logo-tan.svg";
import { FaPlus } from "react-icons/fa";
// import { useDriverKickContext } from '../../../utils/DriverKickContext';

function VehicleNavBar() {
    ;

    const userDashRedirect = () => {
        // Need to fix this function as it doesn't redirect
        console.log("Userdash redirect btn")
        return <Redirect to={{ pathname: "/stage-user-dashboard" }} />;
    }

    const logout = () => {
        // Need to close out session and front end logout. Perhaps handling this through context.
        console.log("Logout btn")
    }
    return (
        <>
            <div className="g__nav-dashboards">
                <Navbar className="container navbar justify-content-between flex-column flex-sm-row ">
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            className="d-inline-block align-top"
                            alt="Drive Kick Logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <div className="g__nav-btn-group">
                            <Button className="btn" onClick={userDashRedirect}>User Dashboard</Button>

                            <button
                                type="button"
                                className="btn"
                                onClick={logout}
                            >
                                Logout
                        </button>
                        </div>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default VehicleNavBar;