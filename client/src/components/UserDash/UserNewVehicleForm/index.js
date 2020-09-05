import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from "../../../utils/API";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDriverKickContext } from '../../../utils/DriverKickContext';

function UserNewVehicleForm() {
  const { setUserData } = useDriverKickContext();
  const [vinNum, setVinNum] = useState(false);
  const [vinData, setVinData] = useState();
  const [vinResults, setVinResults] = useState(false);
  const redirect = useHistory()
  const VIN = vinNum;


  const vinNumValue = (event) => {
    setVinNum(event.target.value);
  };


  const searchUserVehicle = (event) => {
    event.preventDefault();

    API.getDecodeVIN(VIN)
      .then((response) => {
        setVinData(response.data);
        // Authentication user submitted a vin (changing the state from "False" to a truthy value)
        vinNum ? setVinResults(true) : setVinResults(false);
        if (!response.data.errmsg) {
          console.log("successfully added new vehicle");
        } else {
          console.log("Vehicle did not submit successfully");
        }
      })
      .catch((error) => {
        console.log("Vehicle adding error: ");
        console.log(error);
      });
  };

  const submitUserVehicle = (event) => {
    event.preventDefault();
    setUserData(vinData);
    redirect.push("/user-dashboard")
  };

  return (
    <div className="g__form-container">
      <form className="g__deep-blue--txt">
        <h2 className="text-center">Add New Vehicle</h2>
        <div className="g__label-group">
          <Form.Group className="mt-4">
            <Form.Label>Vin Number</Form.Label>
            <InputGroup>
              <FormControl
                placeholder="17 digit code goes here…"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={vinNumValue}
                className=""
              />
              <InputGroup.Append>
                <Button onClick={searchUserVehicle} className="vehicle-form__search-btn">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </div>
        {vinResults ? <div>
          <div className="vehicle-form__vin-result">
            <h3>Your Vehicle</h3>
            <p className="mb-4">Result looks incorrect? Please double-check the VIN above.</p>
            <div className="d-sm-flex justify-content-around">
              <div className="vehicle-form__vin-item">
                <h4 className="g__card__subhead">Make</h4>
                <h3>{vinData.make}</h3>
              </div>
              <div className="vehicle-form__vin-item">
                <h4 className="g__card__subhead">Model</h4>
                <h3>{vinData.model}</h3>
              </div>
              <div className="vehicle-form__vin-item">
                <h4 className="g__card__subhead">Year</h4>
                <h3>{vinData.year}</h3>
              </div>
            </div>
          </div>
          <button
            className="btn vehicle-form__submit-btn"
            onClick={submitUserVehicle}
            type="submit"
          >
            Add Vehicle
        </button>
        </div> : null}

      </form>
    </div>
  );
}

export default UserNewVehicleForm;
