import React, { useState, useRef } from "react";
import "./style.css";
import editBtn from '../../../images/user-page/edit-btn.svg';
import saveBtn from '../../../images/user-page/save-btn.svg';
import ContentEditable from 'react-contenteditable';
import { useDriverKickContext } from '../../../utils/DriverKickContext';



function MileageTrackerCard({ trackMaintenanceBtn }) {
    const [editing, setEditing] = useState(false);
    const [userText, setUserText] = useState("Update Name");
    const { userData } = useDriverKickContext();


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
                                <h3>{userData.make}</h3>
                            </div>
                            <div className="vehicle-card__car-item">
                                <h4 className="g__card__subhead">Year</h4>
                                <h3>{userData.year}</h3>
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
                                <h3>{userData.model}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MileageTrackerCard;