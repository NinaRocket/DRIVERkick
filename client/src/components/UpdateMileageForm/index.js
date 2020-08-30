import React, { useState } from "react";
//import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function UpdateMileageForm() {
  const [mileage, setUpdateMileage] = useState([]);

  const updateMileageValue = (event) => {
    setUpdateMileage(event.target.value);
  };

  const submitUpdateMileage = (event) => {
    event.preventDefault();
    console.log(mileage);

    API.updateMileage(mileage)
      .then((response) => {
        console.log("update mileage response: ");
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successfully updated mileage");
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
    <div className="MileageUpdateForm">
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="mileage">
              Current Mileage
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="number"
              id="mileage"
              name="mileage"
              placeholder="0"
              value={mileage}
              onChange={updateMileageValue}
            />
          </div>
        </div>

        <div className="form-group ">
          <div className="col-7"></div>
          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={submitUpdateMileage}
            type="submit"
          >
            Update Mileage
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateMileageForm;
