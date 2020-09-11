import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import WarrantyInitial from '../WarrantyInitial';
import WarrantyPopulated from '../WarrantyPopulated';
import VehicleWarrantyForm from '../VehicleWarrantyForm';
import VehicleWarrantyIcon from '../../../images/vehiclepage/vehicle-warranty-icon.svg';
import API from "../../../utils/API";
import Modal from 'react-bootstrap/Modal';

// Component For Warranty Modal
function WarrantyModal(props) {
    const [modalShow, setModalShow] = React.useState(false);

    const [warranty, setWarranty] = useState();
    const [warrantyError, setWarrantyError] = useState(false);


    const handleWarranty = (event) => {
        setWarranty(event.target.value);
    }

    const submitWarrantyMilage = (event) => {
        event.preventDefault();
        if (!warranty) {
            return setWarrantyError(true);
        }
        setModalShow(false)

        // Needs to post this to the database
        console.log(warranty)

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
                <h2 className="text-center">Warranty</h2>
                {warrantyError ? <p className="text-center text-danger">Please input your warranty details.</p> : null}

                <VehicleWarrantyForm
                    handleWarranty={handleWarranty}
                    submitWarrantyMilage={submitWarrantyMilage}
                />
            </div>
        </Modal>
    );
}


// Card Component 
function WarrantyCard() {
    const [modalShow, setModalShow] = React.useState(false);
    const [warranty, setWarranty] = useState({});

    // Open and closes modal
    const warrantyModal = () => setModalShow(true);

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(true);


    const { id } = useParams();
    useEffect(() => {
        API.getWarranty(warranty)
            .then((res) => setWarranty(res.data))
            .catch((err) => console.log(err));
        console.log(warranty);
    }, []);

    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={VehicleWarrantyIcon}
                alt={"Check mark Icon"}
                title={"Warranty"}
                description={"Store important third-party warranty details here and stay protected."}
            />
            {newUser ? <WarrantyInitial warrantyModal={warrantyModal} /> : <WarrantyPopulated warrantyModal={warrantyModal} />

            }
            <WarrantyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default WarrantyCard;
