import React, { useState, createRef } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from "../../../utils/API";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
//import isAuthenticated from "../../../../../config/middleware/isAuthenticated";


function UserNewVehicleForm() {
  const { setUserData, logout, selectValue, setSelectValue } = useDriverKickContext();
  const [vinNum, setVinNum] = useState(false);
  const [vinData, setVinData] = useState();
  const [vinResults, setVinResults] = useState(false);
  const redirect = useHistory();
  const VIN = vinNum;

  const vinNumValue = (event) => {
    setVinNum(event.target.value);
  };

  const searchUserVehicle = (event) => {
    event.preventDefault();

    API.getDecodeVIN(VIN)
      .then((response) => {
        if (response.data.isAuthenticated === false) {
          return logout(redirect);
        }
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


  // const saveVINdata = (VIN) => {
  //   API.saveDecodeVIN(VIN)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.isAuthenticated === false) {
  //         return logout(redirect);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //saveVINdata();



  // Submit Form
  const submitUserVehicle = (event) => {
    event.preventDefault();
    
    // Validation to make sure they selected a vehicle type
    if (selectValue) {
      API.addvehicle(vinData.vin, vinData.year, vinData.make, vinData.model);
      // setUserData(vinData);
      redirect.push("/user-dashboard");
    }
    return;
  };


  return (
    <div className="g__form-container">
      <form className="g__deep-blue--txt">
        <h2 className="text-center">Add New Vehicle</h2>
        <div className="g__label-group mt-4">
          <select value={selectValue} onChange={e => setSelectValue(e.currentTarget.value)} className="form-control">
            <option value="">Choose…</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="pickup">Pickup</option>
            <option value="miniVan">Mini Van</option>
            <option value="van">Van</option>
            <option value="sportsCar">Sports Car</option>
            <option value="convertible">Convertible</option>
            <option value="rv">RV</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>
        <div className="g__label-group">
          <Form.Group>
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
                <button
                  onClick={searchUserVehicle}
                  className="btn vehicle-form__search-btn"
                >
                  Search
                </button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </div>
        {vinResults ? (
          <div>
            <div className="vehicle-form__vin-result">
              <h3>Your Vehicle</h3>
              <p className="mb-4">
                Result looks incorrect? Please double-check the VIN above.
              </p>
              <div className="d-md-flex justify-content-around">
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
              className="btn g__form-submit-btn"
              onClick={submitUserVehicle}
              type="submit"
            >
              Add Vehicle
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default UserNewVehicleForm;
