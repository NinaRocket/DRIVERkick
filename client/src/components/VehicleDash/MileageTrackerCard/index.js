import React from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';


function MileageTrackerCard({ mileageTrackingModal }) {
    return (
        <div className="g__vehicle-card">
            {/* Header Col */}
            <div className="g__vehicle-card__header-container">
                <div className="g__vehicle-card__header">
                    <img src={mileageTrackerIcon} alt="Mileage tracker icon" />
                    <h2 className="g__vehicle-card__title">Mileage Tracker</h2>
                </div>
                <p>Frequently updating your mileage generates the most accurate recommendations</p>
            </div>
            {/* <MileageTrackerInitial mileageTrackingModal={mileageTrackingModal} /> */}
            <MileageTrackerPopulated mileageTrackingModal={mileageTrackingModal} />
        </div>
    );
}

export default MileageTrackerCard;