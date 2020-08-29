import React, { useState } from "react";
//import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function VehicleForm() {
  const [VIN, setVIN] = useState([]);
  const [vehicleName, setVehicleName] = useState([]);
  const [ownerName, setOwnerName] = useState([]);
  const [currentMile, setCurrentMile] = useState([]);
  const [estMileOil, setEstMileOil] = useState([]);
  const [oilType, setOilType] = useState([]);
  const [oilInterval, setOilInterval] = useState([]);

  const newVehicleVinVal = (event) => {
    setVIN(event.target.value);
  };

  const newVehicleNameVal = (event) => {
    setVehicleName(event.target.value);
  };

  const newVehicleOwnerVal = (event) => {
    setOwnerName(event.target.value);
  };

  const newVehicleCurrentMileVal = (event) => {
    setCurrentMile(event.target.value);
  };

  const newVehicleOilTypeVal = (event) => {
    setOilType(event.target.value);
  };

  const newVehicleEstMileOilVal = (event) => {
    setEstMileOil(event.target.value);
  };

  const newVehicleOilIntervalVal = (event) => {
    setOilInterval(event.target.value);
  };

  const submitNewVehicle = (event) => {
    event.preventDefault();
    console.log(
      VIN,
      vehicleName,
      ownerName,
      currentMile,
      estMileOil,
      oilType,
      oilInterval
    );
    const vehicleInfo = {
      VIN: VIN,
      vehicleName: vehicleName,
      ownerName: ownerName,
      currentMile: currentMile,
      estMileOil: estMileOil,
      oilType: oilType,
      oilInterval: oilInterval,
    };
    //request to server to add a new vehicle
    API.addvehicle(vehicleInfo)
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successfully added new vehicle");
          //   this.state({
          //     //redirect to login page
          //     //home for now
          //     redirectTo: "/home",
          //   });
        } else {
          console.log("Nina doesn't know how to code");
        }
      })
      .catch((error) => {
        console.log("adding vehicle error: ");
        console.log(error);
      });
  };

  return (
    <div className="VehicleForm">
      <h4>Add New Vehicle</h4>
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="VIN">
              VIN Number
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="VIN"
              name="VIN"
              placeholder="17 digit code goes here"
              value={VIN}
              onChange={newVehicleVinVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="vehicleName">
              Car Nickname:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="vehicleName"
              name="vehicleName"
              placeholder="i.e. Blue Lightning"
              value={vehicleName}
              onChange={newVehicleNameVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="ownerName">
              Owner Name:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="ownerName"
              name="ownerName"
              placeholder="First and/or Last Name"
              value={ownerName}
              onChange={newVehicleOwnerVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="currentMile">
              Current Mileage:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              placeholder="0"
              type="number"
              name="currentMile"
              value={currentMile}
              onChange={newVehicleCurrentMileVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="estMileOil">
              Estimated Mileage at Last Oil Change:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              placeholder="0"
              type="number"
              name="estMileOil"
              value={estMileOil}
              onChange={newVehicleEstMileOilVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="oilType">
              Type of Oil Used:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              placeholder="Full, Blend, Conventional, High Mileage"
              type="text"
              name="oilType"
              value={oilType}
              onChange={newVehicleOilTypeVal}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="oilInterval">
              Recommended Miles between Oil Changes:{" "}
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              placeholder="0"
              type="number"
              name="oilInterval"
              value={oilInterval}
              onChange={newVehicleOilIntervalVal}
            />
          </div>
        </div>

        <div className="form-group ">
          <div className="col-7"></div>
          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={submitNewVehicle}
            type="submit"
          >
            Add New Vehicle
          </button>
        </div>
      </form>
    </div>
  );
}

export default VehicleForm;
