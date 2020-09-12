import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import WarrantyInitial from '../WarrantyInitial';
import WarrantyPopulated from '../WarrantyPopulated';
import VehicleWarrantyIcon from '../../../images/vehiclepage/vehicle-warranty-icon.svg';
import WarrantyForm from "../VehicleWarrantyForm";
import API from "../../../utils/API";

function WarrantyCard({ warrantyModal }) {
    const [warranty, setWarranty] = useState({});
    const [show, setShow] = useState(false);

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(false);


    const { id } = useParams();
    useEffect(() => {
        API.getWarranty(warranty)
            .then((res) => setWarranty(res.data))
            .catch((err) => console.log(err));
        console.log(warranty);
    }, []);

    // function loadWarranties() {
    //   API.getWarranty()
    //     .then((res) => setWarranty(res.data))
    //     .catch((err) => console.log(err));
    // }

    // function handleFormSubmit(warranty) {
    //   //event.preventDefault();
    //   API.getWarranty()
    //     .then((res) => loadWarranties())
    //     .catch((err) => console.log(err));
    // }

    //     API.getWarrantyById(id)
    //         .then((res) => setWarranty(res.data))
    //         .catch((err) => console.log(err));
    //     console.log(warranty);
    // }, []);
    // console.log(warranty);

    // useEffect(() => {
    //   loadWarranties()
    //     // set initial state to an empty array
    // }, [])

    // function loadWarranties() {
    //   API.getWarranty()
    //   .then(res => setWarranty(res.data))
    //   .catch(err => console.log(err));
    // }

    // function handleFormSubmit(event) {
    //   event.preventDefault();
    //     API.newWarranty({
    //       title: title,
    //       provider: provider,
    //       details: details
    //     })
    //       .then(res => loadWarranties())
    //       .catch(err => console.log(err));
    // };

    // need to dislpay EVERY warranty card
    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={VehicleWarrantyIcon}
                alt={"Check mark Icon"}
                title={"Warranty"}
                description={"Store important third-party warranty details here and stay protected."}
            />
            {newUser ? <WarrantyInitial warrantyModal={"warrantyModal"} /> : <WarrantyPopulated warrantyModal={"warrantyModal"} />

            }

        </div>
        // <>
        //     <Modal show={show} onHide={handleClose}>
        //         <Modal.Header closeButton>
        //             <Modal.Title>Warranty</Modal.Title>
        //         </Modal.Header>
        //         <Modal.Body>
        //             <WarrantyForm />
        //         </Modal.Body>
        //         <Modal.Footer>
        //             <Button variant="secondary" onClick={handleClose}>
        //                 Close
        //   </Button>
        //         </Modal.Footer>
        //     </Modal>

        //     <Card className="warrantyCard text-center">
        //         <Card.Header>Title {warranty.title}</Card.Header>
        //         <Card.Body>
        //             <Card.Title>Warranty: {warranty.provider}</Card.Title>
        //             <Card.Text>{warranty.details} </Card.Text>
        //             <Button className="warBtn" variant="primary" onClick={handleShow}>
        //                 Add Warranty
        //   </Button>

        //         </Card.Body>
        //     </Card>
        // </>
    );
}

export default WarrantyCard;
