import React, { useState } from "react";
import "./style.css";
import vehicleRecallIcon from '../../../images/vehiclepage/vehicle-recall-icon.svg';
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';

function VehicleRecallsCard() {
    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);

    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={vehicleRecallIcon}
                alt={"Warning exclamation mark"}
                title={"Recalls"}
                description={"Check here frequently to see if your vehicle has been affected."}
            />
            {/* {newUser ? <MileageTrackerInitial /> : <MileageTrackerPopulated />

            } */}

        </div>
    );
}

export default VehicleRecallsCard;