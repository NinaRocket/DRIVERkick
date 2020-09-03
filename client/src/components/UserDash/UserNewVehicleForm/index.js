import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import "./style.css";
import API from "../../../utils/API";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UserNewVehicleForm() {
  const [vinNum, setVinNum] = useState({});
  const [vinData, setVinData] = useState({});
  const [vinModel, setVinModel] = useState("");
  const [vinYear, setVinYear] = useState("");
  //const [redirect, setRedirect] = useState("/stage-user-dashboard");

  //const { VIN } = useParams();

  // useEffect(() => {
  //   setRedirect(true);
  // }, []);

  const vinNumValue = (event) => {
    setVinNum(event.target.value);
  };
  const VIN = vinNum;
  // const vinSearch = () => {
  //   // Does some sort of search with the vin number which is stored in "vinNum" state.
  // };

  const searchUserVehicle = (event) => {
    event.preventDefault();
    // const userVehicleInfo = {
    //   vinNum,
    // };

    //request to server to add a new email/password
    // Need to add a way to not submit if the person selects "choose" as the <select> value
    API.getDecodeVIN(VIN)
      .then((response) => {
        console.log(response);
        setVinData(response.data);
        if (!response.data.errmsg) {
          console.log("successfully added new vehicle");
          //home for now
          //setRedirect("/stage-user-dashboard");
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
    console.log("this ran");
    // return <Redirect to="/stage-user-dashboard" />;
    return (
      <Route exact path="/stage-vehicle-form">
        <Redirect to="/stage-user-dashboard" />
      </Route>
    );
  };

  return (
    <div className="g__form-container">
      <form className="g__deep-blue--txt">
        <div className="g__label-group">
          <Form.Group>
            <Form.Label>Vin Number</Form.Label>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="17 digit code goes here…"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={vinNumValue}
              />
              <InputGroup.Append>
                <Button onClick={searchUserVehicle} variant="outline-secondary">
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </div>
        <hr />
        <h3>Your Vehicle</h3>
        <p>Result looks incorrect? Please double-check the VIN above.</p>
        <div className="d-sm-flex justify-content-around">
          <div>
            <h4>Make</h4>
            <h3>{vinData.make}</h3>
          </div>
          <div>
            <h4>Model</h4>
            <h3>{vinData.model}</h3>
          </div>
          <div>
            <h4>Year</h4>
            <h3>{vinData.year}</h3>
          </div>
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

export default UserNewVehicleForm;
