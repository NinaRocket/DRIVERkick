import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import API from "../../../utils/API";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function UserNewVehicleForm() {
  const { logout, selectValue, setSelectValue } = useDriverKickContext();
  const [vinNum, setVinNum] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [vinError, setVinError] = useState(false);
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
      })
      .catch((error) => {
        console.log(`login error: ${error}`);
      });
  };


  // Submit Form
  const submitUserVehicle = (event) => {
    event.preventDefault();

    // Validation to make sure they selected a vehicle type and submitted an accurate
    if (!selectValue) {
      return setSelectError(true);
    } else if (!vinData.make && !vinData.model && !vinData.year) {
      return setVinError(true);
    } else {
      API.addvehicle(
        vinData.vin,
        vinData.year,
        vinData.make,
        vinData.model,
        selectValue
      );
      redirect.push("/user-dashboard");
    }
  };

  return (
    <div className="g__form-container">
      <form className="g__deep-blue--txt">
        <h2 className="text-center">Add New Vehicle</h2>

        {/* Error Validation */}
        {selectError ? (
          <p className="text-center text-danger">
            Please confirm a vehicle type has been specified.
          </p>
        ) : null}

        {/* Error Validation */}
        {vinError ? (
          <p className="text-center text-danger">
            Please confirm an accurate VIN has been specified.
          </p>
        ) : null}

        <div className="g__label-group mt-4">
          <select
            value={selectValue}
            onChange={(e) => setSelectValue(e.currentTarget.value)}
            className={`form-control ${
              selectError ? "g__form-input-err" : null
              }`}
          >
            <option value="">Choose…</option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/sedan-type-icon.svg">
              Sedan
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/suv-type-icon.svg">
              SUV
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/pickup-type-icon.svg">
              Pickup
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/minivan-type-icon.svg">
              Mini Van
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/van-type-icon.svg">
              Van
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/sportscar-type-icon.svg">
              Sports Car
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/convertable-type-icon.svg">
              Convertible
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/rv-type-icon.svg">
              RV
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/95ccd4c717124d2621e7be43ae0d791ef54c7739/client/src/images/global/car-icons/motercycler-type-icon.svg">
              Motorcycle
            </option>
            <option value="https://raw.githubusercontent.com/NinaRocket/DRIVERkick/3340f741a52cc693e12bc6c7ba6b06d8c14cd508/client/src/images/global/car-icons/smart-type-icon.svg">
              Smart/Electric Car
            </option>
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
                className={vinError ? "g__form-input-err" : null}
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
