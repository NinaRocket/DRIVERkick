import React from 'react';
import "./style.css"

function HomeFeatDescriptions({ icon, alt, subhead, text }) {
    return (
        <div className="description-module">
            <img src={icon} alt={alt} />
            <h5 className="description-module__subhead">{subhead}</h5>
            <p>{text}</p>
        </div>
    );
}

export default HomeFeatDescriptions;