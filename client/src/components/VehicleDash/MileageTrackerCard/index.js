import React, { useState } from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg';
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';




function MileageTrackerCard({ mileageTrackingModal }) {

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);


    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={mileageTrackerIcon}
                alt={"Mileage Tracker Icon"}
                title={"Mileage Tracker"}
                description={"Frequently updating your mileage generates the most accurate recommendations."}
            />
            {newUser ? <MileageTrackerInitial mileageTrackingModal={mileageTrackingModal} /> : <MileageTrackerPopulated mileageTrackingModal={mileageTrackingModal} />

            }

        </div>
    );
}

export default MileageTrackerCard;