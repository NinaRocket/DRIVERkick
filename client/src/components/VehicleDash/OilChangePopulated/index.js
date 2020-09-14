import React, { useState, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import API from "../../../utils/API";
import oilCan from "../../../images/vehiclepage/oil-can.svg";
import oilCanFire from "../../../images/vehiclepage/oil-can-fire.svg";
import oilCanRed from "../../../images/vehiclepage/oil-can-red.svg";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import ProgressBar from "react-bootstrap/ProgressBar";

// Oil Change COMPONENT ==============================
function OilChangePopulated({ oilChangeTrackingModal, warranty }) {
  // Controls progress bar amount
  const [status, setStatus] = useState(3);

  const oilStatusColorHelper = (bgEvent, redEvent) => {
    if (status <= 20 && status > 5) {
      return bgEvent ? bgEvent : "g__fiery-orange--txt";
    } else if (status <= 5) {
      return redEvent ? redEvent : "g__red--txt";
    } else {
      return null;
    }
  };

  const oilStatusIconHelper = () => {
    if (status <= 20 && status > 5) {
      return oilCanFire;
    } else if (status <= 5) {
      return oilCanRed;
    } else {
      return oilCan;
    }
  };

  return (
    <div className="oil-change-card__container">
      <div className="oil-change-card__body">
        <div className="oil-change-card__number">
          <h4 className="g__sky-blue--txt">Miles to next Oil Change</h4>
          <h3
            className={`oil-change-card__mileage-txt ${oilStatusColorHelper()}`}
          >
            {status}
          </h3>
        </div>
        <div className="oil-change-card__progress-container">
          <img
            src={oilStatusIconHelper()}
            alt="Oil Can"
            className="oil-change-card__progress-icon"
          />
          <ProgressBar
            now={status}
            className={`oil-change-card__progress-bar ${oilStatusColorHelper(
              "g__progress-override",
              "g__progress-override--red"
            )}`}
          />
        </div>
      </div>
      <div className="oil-change-card__error-container">
        {status <= 5 ? (
          <h5>Time to get an oil change as soon as possible!</h5>
        ) : null}
      </div>
      <button
        className="g__vehicle-card__btn mt-3"
        onClick={oilChangeTrackingModal}
      >
        Update Oil Change
      </button>
    </div>
  );
}

export default OilChangePopulated;
