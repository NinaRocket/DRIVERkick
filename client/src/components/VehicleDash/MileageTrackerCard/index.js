import React, { useState } from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';




function MileageTrackerCard({ mileageTrackingModal }) {

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);

    return (
        <div className="g__vehicle-card">
            {/* Header Col */}
            <div className="g__vehicle-card__header-container">
                <div className="g__vehicle-card__header">
                    <img src={mileageTrackerIcon} alt="Mileage tracker icon" 
                    className="g__vehicle-card__header-icon"/>
                    <h2 className="g__vehicle-card__title">Mileage Tracker</h2>
                </div>
                <p>Frequently updating your mileage generates the most accurate recommendations.</p>
            </div>
            {newUser ? <MileageTrackerInitial mileageTrackingModal={mileageTrackingModal} /> : <MileageTrackerPopulated mileageTrackingModal={mileageTrackingModal} />

            }
        </div>
    );
}

export default MileageTrackerCard;