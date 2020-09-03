import React from 'react';
import "./style.css";


function MileageTrackerCard({ mileageTrackingModal }) {
    return (

        <div className="mileage-card__body">
            <div className="mileage-card__current">
                <div>
                    <h4 className="mileage-card__subhead">Current Mileage</h4>
                    <h3 className="mileage-card__mileage-txt">76,000</h3>
                </div>
                <div>
                    <h4 className="mileage-card__subhead">Last Updated</h4>
                    <h3 className="mileage-card__date-txt">2/28/2020</h3>
                </div>
                <button className="g__vehicle-card__btn" onClick={mileageTrackingModal}>Update Current Milage</button>
            </div>
            <div className="mileage-card__history">
            <h4 className="mileage-card__subhead">History</h4>
            </div>

        </div>



    );
}

export default MileageTrackerCard;