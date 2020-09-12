import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";

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
