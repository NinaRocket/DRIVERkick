import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDriverKickContext } from "../../../utils/DriverKickContext";


// Warranty COMPONENT ==============================
function OilChangePopulated({ oilChangeTrackingModal, warranty }) {



  return (

    <div className="oil-change-card__container">
      <div className="oil-change-card_body">
        <div className="oil-change-card_number">
          <h4 className="g__sky-blue--txt">Miles to next Oil Change</h4>
          <h3 className="oil-change-card__mileage-txt">3,023</h3>

        </div>
        <div className="oil-change-card_progress-contain">
          
        </div>
      </div>

      <button className="g__vehicle-card__btn mt-3" onClick={oilChangeTrackingModal}>Update Oil Change</button>
    </div>

  );
}

export default OilChangePopulated;
