import React from 'react';
import "./style.css";




function MileageTrackerCard({ icon, alt, title, description }) {

    return (

        <div className="g__vehicle-card__header-container">
            <div className="g__vehicle-card__header">
                <img src={icon} alt={alt}
                    className="g__vehicle-card__header-icon" />
                <h2 className="g__vehicle-card__title">{title}</h2>
            </div>
            <p>{description}</p>
        </div>


    );
}

export default MileageTrackerCard;