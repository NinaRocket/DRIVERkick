import React from "react";
import "./style.css";
import Form from 'react-bootstrap/Form';

function VehicleWarrantyForm({
  addWarrantyTitle,
  addWarrantyProvider,
  addWarrantyDetails,
  submitWarrantyForm
}) {

  return (
    <Form className="g__deep-blue--txt">
      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyTitle">Warranty Title </Form.Label>
          <Form.Control
            type="text"
            id="warrantyTitle"
            name="warrantyTitle"
            placeholder="Name of warranty…"
            onChange={addWarrantyTitle} />
        </Form.Group>
      </div>

      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyProvider">Warranty Provider</Form.Label>
          <Form.Control
            type="text"
            id="warrantyProvider"
            name="warrantyProvider"
            placeholder="Store or company..."
            onChange={addWarrantyProvider} />
        </Form.Group>
      </div>

      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="warrantyDetails">Warranty Details</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            id="warrantyDetails"
            name="warrantyDetails"
            placeholder="Provide any relevant notes that will need to be referred to in the future…"
            onChange={addWarrantyDetails} />
        </Form.Group>
      </div>

      <button
        className="btn g__form-submit-btn"
        onClick={submitWarrantyForm}
        type="submit"
      >Add Warranty</button>
    </Form>
  );
}

export default VehicleWarrantyForm;
