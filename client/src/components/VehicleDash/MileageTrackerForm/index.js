import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import Form from "react-bootstrap/form";
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function VehicleCurrentMileageForm({
  handleMilage,
  submitCurrentMilage,
  vehicleID,
}) {
  const [currentMileage, setUpdateMileage] = useState([]);
  const { vehID, setVehID, logout } = useDriverKickContext();

  // Sets up page redirect
  const history = useHistory();

  //   const updateMileageValue = (event) => {
  //     setUpdateMileage(event.target.value);
  //   };

  const submitUpdateMileage = (event) => {
    event.preventDefault();
    console.log(currentMileage);

    API.updateMileage(vehID, vehicleID, currentMileage)
      .then((response) => {
        console.log("update mileage response: ");
        console.log(response);
        if (response.data.isAuthenticated === false) {
          return logout(history);
        }
        setUpdateMileage(currentMileage);
      })
      .catch((error) => {
        console.log("adding mileage error: ");
        console.log(error);
      });
  };

  return (
    <form className="g__deep-blue--txt">
      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label>Current Mileage</Form.Label>
          <Form.Control type="number" placeholder="0" onChange={handleMilage} />
        </Form.Group>
      </div>

      <button
        className="btn g__form-submit-btn"
        onClick={submitCurrentMilage}
        type="submit"
      >
        Update
      </button>
    </form>
  );
}

export default VehicleCurrentMileageForm;
import Form from "react-bootstrap/form";

function MileageTrackerForm({ handleMilage, submitCurrentMilage }) {
  return (
    <form className="g__deep-blue--txt">
      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label>Current Mileage</Form.Label>
          <Form.Control type="number" placeholder="0" onChange={handleMilage} />
        </Form.Group>
      </div>

      <button
        className="btn g__form-submit-btn"
        onClick={submitCurrentMilage}
        type="submit"
      >
        Update
      </button>
    </form>
  );
}

export default MileageTrackerForm;
