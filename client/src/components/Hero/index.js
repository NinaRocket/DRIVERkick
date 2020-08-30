import React from "react";
import "./style.css";
import Rectangle from "../../images/Rectangle-19.jpg";
import CaughtOff from "../../images/caughtoff.png";

function Hero() {
  return (
    <div>
      <img className="rectangle" src={Rectangle} alt="car"></img>
      <img
        className="caughtoff"
        src={CaughtOff}
        alt="dont get caught off guard"
      ></img>
    </div>
  );
}

export default Hero;
