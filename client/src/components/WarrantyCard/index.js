import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import WarrantyForm from "../WarrantyForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

function WarrantyCard({ children }) {
  const [warranty, setWarranty] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  //   API.getWarranty({
  //     // title: title,
  //     // provider: provider,
  //     // details: details,
  //     warranty,
  //   })
  //     .then((res) => loadWarranties())
  //     .catch((err) => console.log(err));
  // }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warranty</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WarrantyForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="warrantyCard text-center">
        <Card.Header>Title {warranty.title}</Card.Header>
        <Card.Body>
          <Card.Title>Warranty: {warranty.provider}</Card.Title>
          <Card.Text>{warranty.details} </Card.Text>
          <Button className="warBtn" variant="primary" onClick={handleShow}>
            Add Warranty
          </Button>
          <br />
          {/* <Button className="getBtn" variant="primary" onClick={}>
            Get Warranty
          </Button>
          ; */}
        </Card.Body>
      </Card>
    </>
  );
}

export default WarrantyCard;
