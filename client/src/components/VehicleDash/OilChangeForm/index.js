import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";

function OilChangeForm({
  submitOilChangeForm,
  addOilType,
  addCurrentMileage,
  setSelectOilChangeValue,
  selectOilChangeValue,
}) {
  return (
    <Form className="g__deep-blue--txt">
      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="oilType">Type of Oil Used</Form.Label>
          <Form.Control
            type="text"
            id="oilType"
            name="oilType"
            placeholder="Full, Blend, Conventional, High Mileage…"
            onChange={addOilType}
          />
        </Form.Group>
      </div>

      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="currentMileage">Current Mileage</Form.Label>
          <Form.Control
            type="number"
            id="currentMileage"
            name="currentMileage"
            placeholder="0"
            onChange={addCurrentMileage}
          />
        </Form.Group>
      </div>

      <div className="g__label-group mt-4">
        <Form.Group>
          <Form.Label htmlFor="selectOilChange">
            Miles Until Next Oil Change
          </Form.Label>
          <select
            value={selectOilChangeValue}
            onChange={(e) => setSelectOilChangeValue(e.currentTarget.value)}
            className="form-control"
          >
            <option value="">Choose…</option>
            <option value="3000">3,000</option>
            <option value="4000">4,000</option>
            <option value="5000">5,000</option>
          </select>
        </Form.Group>
      </div>

      <button
        className="btn g__form-submit-btn"
        onClick={submitOilChangeForm}
        type="submit"
      >
        Update
      </button>
    </Form>
  );
}

export default OilChangeForm;
