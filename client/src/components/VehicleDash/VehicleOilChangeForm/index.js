import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../../utils/API";

function VehicleOilChangeForm() {
  const [currentMileage, setCurrentMileage] = useState();
  const [oilType, setOilType] = useState("");
  const [milesToOil, setMilesToOil] = useState({ value: "choose" });
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(true);
  }, []);

  const currentMileageValue = (event) => {
    setCurrentMileage(event.target.value);
  };

  const oilTypeValue = (event) => {
    setOilType(event.target.value);
  };

  const milesToOilValue = (event) => {
    setMilesToOil({ value: event.target.value });
  };

  const submitUserVehicle = (event) => {
    event.preventDefault();
    const userVehicleInfo = {
      currentMileage,
      oilType,
      milesToOil,
    };

    //request to server to add a new email/password
    API.addvehicle(userVehicleInfo)
      .then((response) => {
        if (!response.data.errmsg) {
          setRedirect("/stage-user-dashboard");
        } 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="g__form-container">
      <form className="g__deep-blue--txt">
        <div className="g__label-group">
          <label className="form-label" htmlFor="curMileage">
            Current Mileage
          </label>
          <input
            className="form-input"
            type="number"
            placeholder="0"
            name="curMileage"
            id="curMileage"
            value={currentMileage}
            onChange={currentMileageValue}
          />
        </div>
        <div className="g__label-group">
          <label className="form-label" htmlFor="carOilType">
            Type of Oil Used
          </label>
          <input
            className="form-input"
            type="text"
            id="carOilType"
            name="carOilType"
            placeholder="Full, Blend, Conventional, High Mileage…"
            value={oilType}
            onChange={oilTypeValue}
          />
        </div>
        <div className="g__label-group">
          <label className="form-label" htmlFor="milageToOilChange">
            Recommended Miles to Oil Change
          </label>

          <select
            id="milageToOilChange"
            name="milageToOilChange"
            onChange={milesToOilValue}
            defaultValue={milesToOil}
          >
            <option>Choose…</option>
            <option value={3000}>3,000</option>
            <option value={5000}>5,000</option>
            <option value={6000}>6,000</option>
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={submitUserVehicle}
          type="submit"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default VehicleOilChangeForm;
