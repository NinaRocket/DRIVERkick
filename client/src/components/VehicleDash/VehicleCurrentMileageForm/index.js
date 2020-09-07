import React from 'react';
import "./style.css";
import Form from 'react-bootstrap/form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function VehicleCurrentMileageForm() {
    return (
        <div className="g__form-container">
            <form className="g__deep-blue--txt">
                <h2 className="text-center">Add New Vehicle</h2>
                <div className="g__label-group">
                    <Form.Group>
                        <Form.Label>Vin Number</Form.Label>
                        <InputGroup>
                            <FormControl
                                placeholder="17 digit code goes here…"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                // onChange={vinNumValue}
                                className=""
                            />
                            <InputGroup.Append>
                                <button
                                    // onClick={searchUserVehicle}
                                    className="btn vehicle-form__search-btn"
                                >
                                    Search
                </button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </div>

                <button
                    className="btn g__form-submit-btn"
                    // onClick={submitUserVehicle}
                    type="submit"
                >
                    Add Vehicle
            </button>
            </form>
        </div>
    );
}

export default VehicleCurrentMileageForm;