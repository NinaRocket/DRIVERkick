import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Table from 'react-bootstrap/Table';
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function RecallTrackerPopulated({ mileageTrackingModal }) {

    return (
        // START Hard Code Placeholders ————————|
        <div className="recall-card__body g__coming-soon">
            <div className="recall-card__content">

                <h5>9/16/2020</h5>
                <h2 className="g__sky-blue--txt">Toyota Recall On Door Handles</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh etiam libero malesuada vehicula sed justo, tincidunt. In ridiculus magna semper purus. Faucibus morbi feugiat et, ac, luctus quis. Sodales nunc bibendum ut at suspendisse. Ultricies quis viverra nec pharetra morbi consequat fames. Vestibulum, sed gravida dui, tortor erat morbi venenatis. Eget ultrices sed felis mattis et. Etiam aliquam, massa felis, ut at porttitor. Porttitor tristique ultric.</p>
            </div>

        </div>
        // END Hard Code Placeholders ————————|

        // START ———— Production code to use when the API has been integrated.

        // <div className="recall-card__body">
        //     <div className="recall-card__content">

        //         <h5>{recall.date}</h5>
        //         <h2 className="g__sky-blue--txt">{recall.title}</h2>
        //         <p>{recall.description}</p>
        //     </div>

        // </div>

        // END ———— Production code to use when the API has been integrated.


    );
}

export default RecallTrackerPopulated;