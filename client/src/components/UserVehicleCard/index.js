import React from "react";
import "./style.css";


function UserVehicleCard({ trackMaintenanceBtn }) {
    return (
        <div>
            {/* Row */}
            <div>
                {/* Image Col */}
                <div>
                    Image
                </div>
                {/* Content Col */}
                <div>
                    {/* Header Row & Bottom-border*/}
                    <div>
                        <div>
                            <h4>Car Nickname</h4>
                            <h3>Radical Roadster</h3>
                        </div>
                        <button onClick={trackMaintenanceBtn}>Track Maintenance</button>
                    </div>
                    {/* Car Specs */}
                    <div>
                        {/* Row 1 */}
                        <div>
                            <div>
                                <h4>Make</h4>
                                <h3>Toyota</h3>
                            </div>
                            <div>
                                <h4>Year</h4>
                                <h3>2001</h3>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div>
                            <div>
                                <h4>Owner</h4>
                                <h3>Linnea Gear</h3>
                            </div>
                            <div>
                                <h4>Model</h4>
                                <h3>Coup</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserVehicleCard;