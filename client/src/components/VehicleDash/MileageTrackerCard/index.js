import React, { useState } from 'react';
import "./style.css";
import mileageTrackerIcon from '../../../images/vehiclepage/vehicle-mileage-icon.svg';
import MileageTrackerInitial from '../MileageTrackerInitial';
import MileageTrackerPopulated from '../MileageTrackerPopulated';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
          </Modal.Title>
            </Modal.Header>
          
        </Modal>
    );
}



function MileageTrackerCard() {

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    const mileageTrackingModal = () => {
        setModalShow(true)
    }
    return (
        <div className="g__vehicle-card">
            {/* Header Col */}
            <div className="g__vehicle-card__header-container">
                <div className="g__vehicle-card__header">
                    <img src={mileageTrackerIcon} alt="Mileage tracker icon"
                        className="g__vehicle-card__header-icon" />
                    <h2 className="g__vehicle-card__title">Mileage Tracker</h2>
                </div>
                <p>Frequently updating your mileage generates the most accurate recommendations.</p>
            </div>
            {newUser ? <MileageTrackerInitial mileageTrackingModal={mileageTrackingModal} /> : <MileageTrackerPopulated mileageTrackingModal={mileageTrackingModal} />

            }
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default MileageTrackerCard;