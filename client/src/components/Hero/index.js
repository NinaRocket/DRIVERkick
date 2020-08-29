import React from "react";
import "./style.css";
import Rectangle from "../../images/Rectangle-19.jpg";
import CaughtOff from "../../images/caughtoff.png";
import Logo from "../../images/driverkicklogo.png";
import LoginText from "../../images/Login.png";
import GetStarted from "../../images/GetStarted.png";
import Frame from "../../images/Frame-3.png";
import { Link } from "react-router-dom";
import UserNav from "../UserNav";


function Hero() {
  return (
    <>
      <div >
        <img className="rectangle" src={Rectangle} alt="car"
        ></img>
        <Link className="home" to="/"><img className="logo" src={Logo}></img></Link>
        <div className="btnGroup" src={Frame} alt="actions">
          <Link className="signup-link" to="/signup"><button type="button" className="btn startedBtn"><img className="getStartedtext" src={GetStarted} alt="signup"></img> </button></Link>
          <Link className="login-link" to="/login"><button type="button" className="btn loginBtn"><img className="logtext" src={LoginText} alt="login"></img></button></Link>
        </div>
        <img className="caughtoff" src={CaughtOff} alt="dont get caught off guard"></img>

      </div>
      <UserNav />
    </>
  );
}

export default Hero;

