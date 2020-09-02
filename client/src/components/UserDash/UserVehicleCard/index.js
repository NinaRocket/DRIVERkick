import React, { useEffect, useState } from "react";
import "./style.css";

function VehicleNavBar({ trackMaintenanceBtn }) {
    // Edit Code ——————————|
    const [edit, setEdit] = useState(false);
    const [customTxt, setCustomTxt] = useState();
    
    const editFunc = () => {
        const styler = document.getElementById("editVal");
        styler.setAttribute("style", "color:red; border: 1px solid blue;");
        setEdit(true)
    }

    const saveFunc = () => {
        const values = document.getElementById("editVal");
        values.removeAttribute("style");
        setCustomTxt(values)
        setEdit(false)
    }
    // Edit Code ——————————|
    return (
        <div>
            <button onClick={editFunc}>Edit</button>
            <button onClick={saveFunc}>Save</button>
            {/* Row */}
            <div>
                {/* Image Col */}
                <div>Image</div>
                {/* Content Col */}
                <div>
                    {/* Header Row & Bottom-border*/}
                    <div>
                        <div>
                            <h4>Car Nickname</h4>
                            {/* // Edit Code ——————————|     */}
                            <h3 contentEditable={edit} id="editVal">{!customTxt ? "Edit Me" : customTxt}</h3>
                            {/* // Edit Code ——————————|     */}
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

export default VehicleNavBar;