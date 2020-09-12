import React from "react";
import "./style.css";

import Table from "react-bootstrap/Table";

function MileageTrackerPopulated({ mileageTrackingModal, vehicleInfo }) {
  return (
    <div className="mileage-card__body">
      <div className="mileage-card__current">
        <div>
          <h4 className="g__card__subhead">Current Mileage</h4>
          <h3 className="mileage-card__mileage-txt">
            {vehicleInfo.currentMileage}
          </h3>
        </div>
        <div>
          <h4 className="g__card__subhead">Last Updated</h4>
          <h3 className="mileage-card__date-txt">2/28/2020</h3>
        </div>
        <button className="g__vehicle-card__btn" onClick={mileageTrackingModal}>
          Update Mileage
        </button>
      </div>
      <div className="mileage-card__history">
        <h4 className="g__card__subhead">History</h4>
        <Table hover>
          <tbody>
            <tr>
              <td>2/14/2020</td>
              <td>75,000</td>
            </tr>
            <tr>
              <td>2/14/2020</td>
              <td>75,000</td>
            </tr>
            <tr>
              <td>2/14/2020</td>
              <td>75,000</td>
            </tr>
            <tr>
              <td>2/14/2020</td>
              <td>75,000</td>
            </tr>
            <tr>
              <td>2/14/2020</td>
              <td>75,000</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MileageTrackerPopulated;
