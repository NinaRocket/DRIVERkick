import React from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg'

function MileageTrackerCard({ trackMaintenanceBtn }) {
    return (
        <div>
            {/* Row */}
            <div>
                {/* Header Col */}
                <div>
                    <div>
                        <img src={mileageTrackerIcon} alt="Mileage tracker icon" />
                        <h2>Mileage Tracker</h2>
                    </div>
                    <p>Frequently updating your mileage generates the most accurate recommendations</p>
                </div>
                {/* Components */}
                {/* <MileageTrackerInitialContent /> */}
                

            </div>
        </div>
    );
}

export default MileageTrackerCard;