import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import LogoTan from "../../images/global/drive-kick-logo-tan.svg";
import LogoDark from "../../images/global/drive-kick-logo-dark.svg";
import { FaPlus } from "react-icons/fa";
import { useDriverKickContext } from '../../utils/DriverKickContext';

function UserNavBar() {
    // Context state saying if the current page is the Vehicle Form Page
    const { 
        isHomeNav,
        isLoginNav,
        isSignUpNav,
        isVehicleFormNav,
        isUserDashNav,
        isVehicleDashNav
    } = useDriverKickContext();
    const redirect = useHistory()

    const formVehicleRedirect = () => {
        // Need to fix this function as it doesn't redirect
        redirect.push("/add-vehicle")
    }

    const logout = () => {
        // Need to close out session and front end logout. Perhaps handling this through context.
        console.log("Logout btn")
    }


    return (
        <>
            <div className={isUserDashNav || isVehicleDashNav ? "g__nav-dashboards" : null}>
                <Navbar className="container navbar justify-content-between flex-column flex-sm-row ">
                    <Navbar.Brand href="/">
                        <img
                            src={LogoTan}
                            className="d-inline-block align-top"
                            alt="Drive Kick Logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <div className="g__nav-btn-group">
                            {/* Don't Show Button If On The Form Page */}
                            {!isVehicleFormNav ? <Button className="btn" onClick={formVehicleRedirect}><FaPlus />Add New Vehicle</Button> : ""}

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

export default UserNavBar;