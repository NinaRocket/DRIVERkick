import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import editBtn from '../../../images/user-page/edit-btn.svg';
import saveBtn from '../../../images/user-page/save-btn.svg';
import ContentEditable from 'react-contenteditable';



function VehicleNavBar({ trackMaintenanceBtn }) {
    const [editing, setEditing] = useState(false);
    const [userText, setUserText] = useState("Update Name");

    const editFields = () => {
        console.log("edit button")
        editing ? setEditing(false) : setEditing(true);
    }

    const text = useRef(userText);

    const handleChange = evt => {
        text.current = evt.target.value;
    };

    const handleBlur = () => {
        console.log(text.current);
    };

    return (
        <div className="vehicle-card">
            {/* Row */}
            <div className="d-md-flex">
                {/* Image Col */}
                <div className="vehicle-card__img">
                </div>
                {/* Content Col */}
                <div className="vehicle-card__content">
                    {/* Header Row & Bottom-border*/}
                    <div className="vehicle-card__header">
                        <div>
                            <h4 className="g__card__subhead">Car Nickname</h4>
                            <h3><ContentEditable
                                html={text.current}
                                onBlur={handleBlur}
                                onChange={handleChange} /></h3>

                        </div>
                        <div>
                            <button onClick={editFields} className="vehicle-card__edit-btn">{
                                !editing ? <img src={editBtn} alt="Edit button" /> : <img src={saveBtn} alt="save button" />
                            }</button>
                            <button onClick={trackMaintenanceBtn} className="vehicle-card__track-btn ">Track Maintenance</button>
                        </div>

                    </div>

                    {/* Car Specs */}
                    <div className="vehicle-card__car-info">
                        {/* Col 1 */}
                        <div className="vehicle-card__col">
                            <div className="vehicle-card__car-item">
                                <h4 className="g__card__subhead">Make</h4>
                                <h3>Toyota</h3>
                            </div>
                            <div className="vehicle-card__car-item">
                                <h4 className="g__card__subhead">Year</h4>
                                <h3>2001</h3>
                            </div>
                        </div>
                        {/* Col 2 */}
                        <div className="vehicle-card__col">
                            <div className="vehicle-card__car-item">
                                <h4 className="g__card__subhead">Owner</h4>
                                <h3>Placeholder</h3>
                            </div>
                            <div className="vehicle-card__car-item">
                                <h4 className="g__card__subhead">Model</h4>
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