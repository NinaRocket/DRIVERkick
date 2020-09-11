import React, { useState } from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg';
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';
import MileageTrackerForm from "../MileageTrackerForm";
import Modal from 'react-bootstrap/Modal';

function CurrentMilageModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [mileage, setMileage] = useState();
    const [mileageError, setMileageError] = useState(false);


    const handleMilage = (event) => {
        setMileage(event.target.value);
    }

    const submitCurrentMilage = (event) => {
        event.preventDefault();
        if (!mileage) {
            return setMileageError(true);
        }
        setModalShow(false)

        // Needs to post this to the database
        console.log(mileage)

    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <div className="g__form-container g__remove-margin-bottom">
                <h2 className="text-center">Update Current Mileage</h2>
                {mileageError ? <p className="text-center text-danger">Please input your current milage.</p> : null}



                <MileageTrackerForm
                    handleMilage={handleMilage}
                    submitCurrentMilage={submitCurrentMilage}
                />
            </div>
        </Modal>
    );
}


function MileageTrackerCard() {
    const [modalShow, setModalShow] = React.useState(false);

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);

    // Opens and closes modal
    const mileageModal = () => setModalShow(true);

    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={mileageTrackerIcon}
                alt={"Mileage Tracker Icon"}
                title={"Mileage Tracker"}
                description={"Frequently updating your mileage generates the most accurate recommendations."}
            />
            {newUser ? <MileageTrackerInitial mileageTrackingModal={mileageModal} /> : <MileageTrackerPopulated mileageTrackingModal={mileageModal} />
            }
            <CurrentMilageModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default MileageTrackerCard;