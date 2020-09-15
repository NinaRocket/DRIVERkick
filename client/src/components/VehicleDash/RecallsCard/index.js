import React, { useState } from "react";
import "./style.css";
import vehicleRecallIcon from '../../../images/vehiclepage/vehicle-recall-icon.svg';
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import RecallTrackerInitial from '../RecallTrackerInitial';
import RecallTrackerPopulated from '../RecallTrackerPopulated';

function RecallsCard() {
    // Determines if the initial content or populated content component show up.  
    const [noRecall, setNoRecall] = useState(false);

    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={vehicleRecallIcon}
                alt={"Warning exclamation mark"}
                title={"Recalls"}
                description={"Check here frequently to see if your vehicle has been affected."}

            />
            {noRecall ? <RecallTrackerInitial /> : <RecallTrackerPopulated />}
        </div>
    );
}

export default RecallsCard;