import React, { useEffect, useState } from "react";
import "./style.css";
import Table from "react-bootstrap/Table";
import MileageHistoryTable from "../MileageHistoryTable";
import Moment from "react-moment";

function MileageTrackerPopulated({ mileageTrackingModal, vehicleInfo }) {
  let mileage = vehicleInfo.currentMileage;
  mileage = mileage.toLocaleString();
  return (
    <div className="mileage-card__body">
      <div className="mileage-card__current">
        <div>
          <h4 className="g__card__subhead">Current Mileage</h4>
          <h3 className="mileage-card__mileage-txt">{mileage}</h3>
        </div>
        <div>
          <h4 className="g__card__subhead">Last Updated</h4>
          <h3 className="mileage-card__date-txt">
            <Moment format="MM/DD/YYYY" date={vehicleInfo.lastMileageUpdate} />
          </h3>
        </div>

        <button className="g__vehicle-card__btn" onClick={mileageTrackingModal}>
          Update Mileage
        </button>
      </div>
      <div className="mileage-card__history">
        <h4 className="g__card__subhead">History</h4>
        <Table hover>
          <tbody>
            {vehicleInfo.mileageHistory
              .slice(0)
              .reverse()
              .slice(0, 5)
              .map((element) => {
                return (
                  <MileageHistoryTable
                    key={element._id}
                    date={element.date}
                    mileage={element.mileage}
                  />
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MileageTrackerPopulated;
