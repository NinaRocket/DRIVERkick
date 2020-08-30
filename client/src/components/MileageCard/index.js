import React, { useState } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import UpdateMileageForm from "../UpdateMileageForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MileageCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Current Mileage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateMileageForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="mileageCard text-center">
        <Card.Header>Mileage Tracker</Card.Header>
        <Card.Body>
          <Card.Title>
            Frequently updating your mileage generates the most accurate
            recommendations
          </Card.Title>
          <Card.Text>Get your life together Nina</Card.Text>
          <Button className="milBtn" variant="primary" onClick={handleShow}>
            Update Current Mileage
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MileageCard;
