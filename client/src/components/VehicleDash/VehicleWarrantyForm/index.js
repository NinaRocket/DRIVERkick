import React, { useState } from "react";
import API from "../../../utils/API";
import "./style.css";
import Form from 'react-bootstrap/form';

function VehicleWarrantyForm() {
  const [title, setWarrantyTitle] = useState([]);
  const [provider, setWarrantyProvider] = useState([]);
  const [details, setWarrantyDetails] = useState([]);

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
      title: title,
      provider: provider,
      details: details,
      //vehicle:
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
    <form className="g__deep-blue--txt">
      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyProvider">Current Mileage</Form.Label>
          <Form.Control
            type="text"
            id="warrantyTitle"
            name="warrantyTitle"
            placeholder="Name of warranty…"
            value={title}
            onChange={addWarrantyTitle} />
        </Form.Group>
      </div>



      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyProvider">Current Mileage</Form.Label>
          <Form.Control
            type="text"
            id="warrantyProvider"
            name="warrantyProvider"
            placeholder="Store or company..."
            value={provider}
            onChange={addWarrantyProvider} />
        </Form.Group>
      </div>

      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyDetails">Current Mileage</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            id="warrantyDetails"
            name="warrantyDetails"
            placeholder="Provide any relevant notes that will need to be referred to in the future…"
            value={details}
            onChange={addWarrantyDetails} />
        </Form.Group>
      </div>


      <button
        className="btn g__form-submit-btn"
        onClick={submitNewWarranty}
        type="submit"
      >Add Warranty</button>
    </form>
  );
}

export default VehicleWarrantyForm;
