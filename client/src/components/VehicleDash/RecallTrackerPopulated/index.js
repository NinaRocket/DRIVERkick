import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import Table from 'react-bootstrap/Table';
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";


function RecallTrackerPopulated({ mileageTrackingModal }) {
 // Sets state for warranty
 const [recall, setRecall] = useState([]);
   // Sets up page redirect
   const history = useHistory();
   // Context import
   const { logout } = useDriverKickContext();

 
 useEffect(() => {
    API.getRecalls()
        .then((res) => {
            if (res.data.isAuthenticated === false) {
                return logout(history);
            }
            setRecall(res.data[0]);
            console.log(res.data)
        })
        .catch((err) => console.log(err));
}, []);

    return (
        // START Hard Code Placeholders ————————|
        <div className="recall-card__body">
            <div className="recall-card__content">

                <h5>Date</h5>
                <h2 className="g__sky-blue--txt">Toyota Recalls Door Handles</h2>
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