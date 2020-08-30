import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../../images/driverkicklogo.png";
import LoginText from "../../images/Login.png";
import GetStarted from "../../images/GetStarted.png";
import Frame from "../../images/Frame-3.png";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

function HomeNavbar() {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const handleCloseOne = () => setShowModalOne(false);
  const handleCloseTwo = () => setShowModalTwo(false);
  const handleShow1 = () => setShowModalOne(true);
  const handleShow2 = () => setShowModalTwo(true);
  return (
    // <nav
    //   className="navbar navbar-expand-lg navbar-light bg-light"
    //   role="navigation"
    // >
    <>
      <Modal id="mdlSignup" show={showModalOne} onHide={handleCloseOne}>
        <Modal.Header closeButton>
          <Modal.Title>Create An Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
      </Modal>

      <Modal id="mdlLogin" show={showModalTwo} onHide={handleCloseTwo}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>

      <Navbar className="container navbar justify-content-between flex-column flex-sm-row">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            className="d-inline-block align-top"
            alt="Drive Kick Logo"
          />
        </Navbar.Brand>
        <Nav>
          <div className="btnGroup" src={Frame} alt="actions">
            <button
              id="signupBtn"
              type="button"
              className="btn startedBtn"
              onClick={handleShow1}
            >
              <img
                className="getStartedtext"
                src={GetStarted}
                alt="signup"
              ></img>{" "}
            </button>
            <button
              type="button"
              className="btn loginBtn"
              onClick={handleShow2}
            >
              <img className="logtext" src={LoginText} alt="login"></img>
            </button>
          </div>
        </Nav>
      </Navbar>
    </>
  );
}

export default HomeNavbar;

{
  /* <div className="container">
        <Link className="home" to="/">
          <img className="logo" src={Logo}></img>
        </Link>

        <div className="btnGroup nav-item" src={Frame} alt="actions">
          <button
            id="signupBtn"
            type="button"
            className="btn startedBtn"
            onClick={handleShow1}
          >
            <img className="getStartedtext" src={GetStarted} alt="signup"></img>{" "}
          </button>

          <button type="button" className="btn loginBtn" onClick={handleShow2}>
            <img className="logtext" src={LoginText} alt="login"></img>
          </button>
        </div>
      </div>
    </nav> */
}
