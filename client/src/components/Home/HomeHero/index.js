import React from "react";
import "./style.css";
import anchorCricleBtn from "../../../images/home/anchor-cricle-btn.svg";

function HomeHero() {
  const scroll = () => {
    // Controls scrolling for anchor btn
    const featBlock = document.getElementById("featBlock");
    featBlock.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <header className="home-hero__bg">
      <h1 className="home-hero__h1">
        <span className="home-hero__h1--stack">Don't</span>
        <span className="home-hero__h1--stack">Be Caught</span>
        <span className="home-hero__h1--stack">
          <span className="g__fiery-orange--txt">Off-Guard</span>
        </span>
        <span className="home-hero__h1--stack">Again</span>
      </h1>
      <button
        onClick={scroll}
        className="home-hero__anchor-btn g__btn-reset anchor-bounce"
      >
        <img src={anchorCricleBtn} alt="Scroll down button" />
      </button>
    </header>
  );
}

export default HomeHero;
