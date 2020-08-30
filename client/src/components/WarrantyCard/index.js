import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import WarrantyForm from "../WarrantyForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function WarrantyCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        <Card.Header>Warranty</Card.Header>
        <Card.Body>
          <Card.Title>
            Store important third-party warranty details here and stay
            protected.
          </Card.Title>
          <Card.Text>Need Accordian </Card.Text>
          <Button className="warBtn" variant="primary" onClick={handleShow}>
            Add Warranty
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default WarrantyCard;
