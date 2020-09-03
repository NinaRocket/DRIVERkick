import React from 'react';
import "./style.css";


function MileageTrackerCard({ mileageTrackingModal }) {
    return (
        <div className="g__vehicle-card__body-container g__vehicle-card--top-border">
            <button className="g__vehicle-card__btn" onClick={mileageTrackingModal}>Start Tracking</button>
        </div>
    );
}

export default MileageTrackerCard;