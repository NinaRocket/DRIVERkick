import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import Rectangle from "../../images/Rectangle-19.jpg";
import CaughtOff from "../../images/caughtoff.png";
import Logo from "../../images/driverkicklogo.png";
import LoginText from "../../images/Login.png";
import GetStarted from "../../images/GetStarted.png";
import Frame from "../../images/Frame-3.png";
import { Link } from "react-router-dom";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import SignupModal from "../SignupModal";

function Hero() {
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const handleCloseOne = () => setShowModalOne(false);
  const handleCloseTwo = () => setShowModalTwo(false);
  const handleShow1 = () => setShowModalOne(true);
  const handleShow2 = () => setShowModalTwo(true);

  return (
    <div>
      <Modal id="mdlSignup" show={showModalOne} onHide={handleCloseOne}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
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

      <img className="rectangle" src={Rectangle} alt="car"></img>
      <Link className="home" to="/">
        <img className="logo" src={Logo}></img>
      </Link>
      <div className="btnGroup" src={Frame} alt="actions">
        {/* <Link className="signup-link" to="/signup"> */}
        <button
          id="signupBtn"
          type="button"
          className="btn startedBtn"
          onClick={handleShow1}
        >
          <img className="getStartedtext" src={GetStarted} alt="signup"></img>{" "}
        </button>
        {/* </Link> */}
        {/* <Link className="login-link" to="/login"> */}
        <button type="button" className="btn loginBtn" onClick={handleShow2}>
          <img className="logtext" src={LoginText} alt="login"></img>
        </button>
        {/* </Link> */}
      </div>
      <img
        className="caughtoff"
        src={CaughtOff}
        alt="dont get caught off guard"
      ></img>
    </div>
  );
}

export default Hero;
