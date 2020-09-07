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
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
          </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
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