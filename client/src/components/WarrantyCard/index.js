import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Card from "react-bootstrap/Card";
import WarrantyForm from "../WarrantyForm";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

function WarrantyCard() {
  const [warranty, setWarranty] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  useEffect(() => {
      API.getWarrantyById(id)
          .then((res) => setWarranty(res.data))
          .catch((err) => console.log(err));
      console.log(warranty);
  }, []);
  console.log(warranty);

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
  
  // need to dispay EVERY warranty card
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
        <Card.Header>{warranty.title}</Card.Header>
        <Card.Body>
          <Card.Title>
          {warranty.provider}
          </Card.Title>
          <Card.Text>{warranty.details} </Card.Text>
          <Button className="warBtn" variant="primary" onClick={handleShow}>
            Add Warranty
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default WarrantyCard;
