import React, { useState } from "react";
import API from "../../utils/API";

function WarrantyForm() {
  const [warrantyTitle, setWarrantyTitle] = useState([]);
  const [warrantyProvider, setWarrantyProvider] = useState([]);
  const [warrantyDetails, setWarrantyDetails] = useState([]);

  const addWarrantyTitle = (event) => {
    setWarrantyTitle(event.target.value);
  };

  const addWarrantyProvider = (event) => {
    setWarrantyProvider(event.target.value);
  };

  const addWarrantyDetails = (event) => {
    setWarrantyDetails(event.target.value);
  };

  const submitNewWarranty = (event) => {
    event.preventDefault();

    const warrantyInfo = {
      warrantyTitle: warrantyTitle,
      warrantyProvider: warrantyProvider,
      warrantyDetails: warrantyDetails,
    };

    API.newWarranty(warrantyInfo)
      .then((response) => {
        console.log("new warranty response: ");
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successfully added warranty");
          console.log(warrantyInfo);
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
        console.log("adding warranty error: ");
        console.log(error);
      });
  };

  return (
    <div className="WarrantyForm">
      <form className="form-horizontal">
        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="warrantyTitle">
              Warranty Title
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="warrantyTitle"
              name="warrantyTitle"
              placeholder="name of warranty"
              value={warrantyTitle}
              onChange={addWarrantyTitle}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="wwarrantyProvider">
              Warranty Provider
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="warrantyProvider"
              name="wwarrantyProvider"
              placeholder="Store or company..."
              value={warrantyProvider}
              onChange={addWarrantyProvider}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="col-1 col-ml-auto">
            <label className="form-label" htmlFor="warrantyDetails">
              Warranty Details
            </label>
          </div>
          <div className="col-3 col-mr-auto">
            <input
              className="form-input"
              type="text"
              id="warrantyDetails"
              name="warrantyDetails"
              placeholder="Provide any relevant notes that will need to be referred to in the future"
              value={warrantyDetails}
              onChange={addWarrantyDetails}
            />
          </div>
        </div>

        <div className="form-group ">
          <div className="col-7"></div>
          <button
            className="btn btn-primary col-1 col-mr-auto"
            onClick={submitNewWarranty}
            type="submit"
          >
            Add Warranty
          </button>
        </div>
      </form>
    </div>
  );
}

export default WarrantyForm;
