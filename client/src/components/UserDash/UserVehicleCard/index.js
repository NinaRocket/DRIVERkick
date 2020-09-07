import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import editBtn from "../../../images/user-page/edit-btn.svg";
import saveBtn from "../../../images/user-page/save-btn.svg";
import sedanTypeIcon from "../../../images/user-page/car-type-icon.svg";
import ContentEditable from "react-contenteditable";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function MileageTrackerCard() {
  const [editing, setEditing] = useState(false);
  const [carNickname, setCarNickname] = useState("Update");
  const [ownerName, setOwnerName] = useState("Update");
  const { userData } = useDriverKickContext();

  //redirect to vehicle dashboard
  const redirect = useHistory();
  
  // Stores content edit values into States
  const inputedCarNickname = useRef(carNickname);
  const inputedOwnerName = useRef(ownerName);

  const handleNicknameChange = (evt) => {
    inputedCarNickname.current = evt.target.value;
  };

  const handleOwnerChange = (evt) => {
    inputedOwnerName.current = evt.target.value;
  };


  // Buttons
  const trackMaintenanceBtn = () => {
    redirect.push("/vehicle-dashboard");
  };

  // Controls edit buttons
  const editFields = () => {
    console.log("edit button");
    editing ? setEditing(false) : setEditing(true);
    setCarNickname(inputedCarNickname);
    setOwnerName(inputedOwnerName);
  };


  return (
    <div className="vehicle-card">
      {/* Row */}
      <div className="d-md-flex">
        {/* Image Col */}
        <div className="vehicle-card__img-container">
          <img src={sedanTypeIcon} alt="Car icon" className="vehicle-card__img" />
        </div>
        {/* Content Col */}
        <div className="vehicle-card__content">
          {/* Header Row & Bottom-border*/}
          <div className="vehicle-card__header">
            <div>
              <h4 className="g__card__subhead">Car Nickname</h4>
              <h3>
                <ContentEditable
                  html={inputedCarNickname.current}
                  onChange={handleNicknameChange}
                  disabled={!editing ? true : false}
                  className={editing ? "vehicle-card__custom-input" : ""}
                />
              </h3>
            </div>
            <div>
              <button 
              onClick={editFields} 
              className="vehicle-card__edit-btn g__btn-reset">
                {!editing ? (
                  <img src={editBtn} alt="Edit button" />
                ) : (
                    <img src={saveBtn} alt="save button" />
                  )}
              </button>
              <button
                disabled={editing === true}
                onClick={trackMaintenanceBtn}
                className={`vehicle-card__track-btn ${editing === true ? "g__disabled-btn" : null}`}
              >
                Track Maintenance
              </button>
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
                <h3>
                  <ContentEditable
                    html={inputedOwnerName.current}
                    onChange={handleOwnerChange}
                    disabled={!editing ? true : false}
                    className={editing ? "vehicle-card__custom-input" : ""}
                  />
                </h3>
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
