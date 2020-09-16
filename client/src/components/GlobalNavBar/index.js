import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDriverKickContext } from "../../utils/DriverKickContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LogoTan from "../../images/global/drive-kick-logo-tan.svg";
import LogoDark from "../../images/global/drive-kick-logo-dark.svg";


function GlobalNavBar() {
  // Context state that changes the nav based on the page being used
  const { navType, logout } = useDriverKickContext();

  // Sets redirects to other pages
  const redirect = useHistory();

  // START Buttons --------------------------|
  const signUp = () => {
    redirect.push("/signup");
  };
  const login = () => {
    redirect.push("/login");
  };

  const addNewVehicle = () => {
    redirect.push("/add-vehicle");
  };

  const userDash = () => {
    redirect.push("/user-dashboard");
  };

  const triggerLogout = () => {
    return logout(redirect);
  };
  // END Buttons --------------------------|

  return (
    <>
      <div
        className={`global-nav ${
          navType === "userDash" ||
            navType === "newVehicle" ||
            navType === "vehicleDash"
            ? "global-nav__nav-dashboards"
            : null
          }`}
      >
        <Navbar className="container navbar justify-content-between flex-column flex-sm-row ">
          <Navbar.Brand href="/">
            <img
              src={
                navType === "home" || navType === "notFound"
                  ? LogoDark
                  : LogoTan
              }
              className="d-inline-block align-top global-nav__logo"
              alt="Drive Kick Logo"
            />
          </Navbar.Brand>
          <Nav>

            {/* Home */}
            {navType === "home" || navType === "notFound" ? (
              <div className="global-nav__btn-group">
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
                  className="btn g__btn-outline"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            ) : null}

            {/* Sign Up */}
            {navType === "signup" ? (
              <button type="button" className="btn g__btn-outline" onClick={login}>
                Login
              </button>
            ) : null}

            {/* Log In */}
            {navType === "login" ? (
              <button type="button" className="btn g__btn-outline " onClick={signUp}>
                Sign Up
              </button>
            ) : null}

            {/* User Dash / Add New Vehicle */}
            {navType === "userDash" || navType === "newVehicle" ? (
              <div className="global-nav__btn-group">
                {navType === "userDash" ? (
                  <button className="btn" onClick={addNewVehicle}>
                    Add New Vehicle
                  </button>
                ) : null}

                {navType === "newVehicle" ? (
                  <button type="button" className="btn" onClick={userDash}>
                    User Dashboard
                  </button>
                ) : null}



                <button type="button" className="btn" onClick={triggerLogout}>
                  Logout
                </button>
              </div>
            ) : null}

            {/* Vehicle Dashboard */}
            {navType === "vehicleDash" ? (
              <div className="global-nav__btn-group">
                <button type="button" className="btn" onClick={userDash}>
                  User Dashboard
                </button>

                <button type="button" className="btn" onClick={triggerLogout}>
                  Logout
                </button>
              </div>
            ) : null}
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

export default GlobalNavBar;
