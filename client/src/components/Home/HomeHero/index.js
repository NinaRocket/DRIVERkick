import React from 'react';
import "./style.css"
import anchorCricleBtn from "../../../images/home/anchor-cricle-btn.svg"

function HomeHero() {
    return (
        <header className="home-hero__bg">
            <h1>
                Don’t<br />
                Be Caught<br />
                <span className="g__fiery-orange--txt">Off-Guard</span>
                <br />
            Again
            </h1>
            <a href="#scrollFeatBlock">
            <img src={anchorCricleBtn} className="home-hero__anchor-btn " alt="Scroll down button" />
            </a>
            
        </header>
    );
}

export default HomeHero;