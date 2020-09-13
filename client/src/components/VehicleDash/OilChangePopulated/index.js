import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import oilCan from '../../../images/vehiclepage/oil-can.svg'
import oilCanFire from '../../../images/vehiclepage/oil-can-fire.svg'
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import ProgressBar from 'react-bootstrap/ProgressBar'



// Warranty COMPONENT ==============================
function OilChangePopulated({ oilChangeTrackingModal, warranty }) {

  const [status, setStatus] = useState(70);

  return (

    <div className="oil-change-card__container">
      <div className="oil-change-card__body">
        <div className="oil-change-card__number">
          <h4 className="g__sky-blue--txt">Miles to next Oil Change</h4>
          <h3 className={`oil-change-card__mileage-txt ${status < 80 ? null : "g__fiery-orange--txt"}`}>3,023</h3>

        </div>
        <div className="oil-change-card__progress-container">

          <ProgressBar
            now={status}
            className={`oil-change-card__progress-bar ${status < 80 ? null : "g__progress-override"}`}
          />

          <img src={status < 80 ? oilCan : oilCanFire} alt="Oil Can" className="oil-change-card__progress-icon" />
        </div>
      </div>

      <button className="g__vehicle-card__btn mt-3" onClick={oilChangeTrackingModal}>Update Oil Change</button>
    </div>

  );
}

export default OilChangePopulated;
