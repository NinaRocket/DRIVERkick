import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import editBtn from "../../../images/user-page/edit-btn.svg";
import saveBtn from "../../../images/user-page/save-btn.svg";
import deleteBtn from "../../../images/user-page/delete-btn.svg";
import ContentEditable from "react-contenteditable";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import API from "../../../utils/API";

function UserVehicleCard({
  vehicleIcon,
  vehicleMake,
  vehicleYear,
  vehicleModel,
  vehicleID,
  carNickname,
  ownerName,
  getLatestVehicles,
  bgCardImage,
}) {
  const { logout, setVehID } = useDriverKickContext();

  //redirect to vehicle dashboard
  const history = useHistory();

  // START Custom Editing Code  ———————————————|
  const [editing, setEditing] = useState(false);
  const inputedCarNickname = useRef(carNickname);
  const inputedOwnerName = useRef(ownerName);

  // Controls edit buttons
  const editFields = async () => {
    editing ? setEditing(false) : setEditing(true);
    if (editing) {
      try {
        const driverUpdateRes = await API.updateDriver(
          vehicleID,
          inputedOwnerName.current
        );

        const nicknameUpdateRes = await API.updateNickname(
          vehicleID,
          inputedCarNickname.current
        );

        if (
          driverUpdateRes.data.isAuthenticated === false ||
          nicknameUpdateRes.data.isAuthenticated === false
        ) {
          return logout(history);
        }

        getLatestVehicles();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Most likely will need to combine into above function 
  const deleteFields = () => {
    console.log("delete function")
  }

  const handleNicknameChange = (evt) => {
    inputedCarNickname.current = evt.target.value;
  };

  const handleOwnerChange = (evt) => {
    inputedOwnerName.current = evt.target.value;
  };
  // END Custom Editing Code  ———————————————|

  const trackMaintenanceBtn = () => {
    setVehID(vehicleID);
    history.push("/vehicle-dashboard");
  };

  // Special style so background image can be dynamically replaced with prompts
  const cardBgStyle = {
    borderRadius: "0px 20px",
    WebkitBoxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
    MozBoxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
    boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.1)",
    marginBottom: "40px",
    background: `linear-gradient(0deg, rgba(15, 68, 87, 0.5), rgba(15, 68, 87, 0.5)), url(${bgCardImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={cardBgStyle}>
      {/* Row */}
      <div className="vehicle-card__flex ">
        {/* Image Col */}
        <div className="vehicle-card__img-container">
          <img
            src={vehicleIcon}
            alt={`${vehicleMake} icon`}
            className="vehicle-card__img"
          />
        </div>
        {/* Content Col */}
        <div className="vehicle-card__content">
          {/* Header Row & Bottom-border*/}
          <div className="vehicle-card__header">
            <div>
              <h4 className="g__card__subhead">Car Nickname</h4>
              <h3>
                <ContentEditable
                  html={carNickname}
                  onChange={handleNicknameChange}
                  disabled={!editing ? true : false}
                  className={`vehicle-card__overflow-txt ${
                    editing ? "vehicle-card__custom-input" : ""
                    }`}
                />
              </h3>
            </div>
            <div className="vehicle-card__btn-group">

              {editing ? <button
                onClick={deleteFields}
                className="vehicle-card__edit-btn g__btn-reset"
              >
                <img src={deleteBtn} alt="delete button" />
              </button> : null}


              <button
                onClick={editFields}
                className="vehicle-card__edit-btn g__btn-reset"
              >
                {!editing ? (
                  <img src={editBtn} alt="Edit button" />
                ) : (
                    <img src={saveBtn} alt="save button" />
                  )}
              </button>
              <button
                disabled={editing === true}
                onClick={trackMaintenanceBtn}
                className={`vehicle-card__track-btn ${
                  editing === true ? "g__disabled-btn" : null
                  }`}
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
                <h3>{vehicleMake}</h3>
              </div>
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Year</h4>
                <h3>{vehicleYear}</h3>
              </div>
            </div>
            {/* Col 2 */}
            <div className="vehicle-card__col">
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Model</h4>
                <h3>{vehicleModel}</h3>
              </div>
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Owner</h4>
                <h3>
                  <ContentEditable
                    html={ownerName}
                    onChange={handleOwnerChange}
                    disabled={!editing ? true : false}
                    className={`vehicle-card__overflow-txt ${
                      editing ? "vehicle-card__custom-input" : ""
                      }`}
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserVehicleCard;
