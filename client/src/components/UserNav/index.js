import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../images/driverkicklogo.png";
import { FaPlus } from "react-icons/fa";
import VehicleForm from "../AddVehicleModalForm";

function UserNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VehicleForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add New Vehicle
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar className="container navbar justify-content-between flex-column flex-sm-row">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Drive Kick Logo"
          />
        </Navbar.Brand>

        <Nav>
          <Button className="btnGroup" onClick={handleShow}>
            <FaPlus />
            Add New Vehicle
          </Button>
          {/* <Button onClick={}>Log Out</Button> */}
        </Nav>
      </Navbar>
    </>
  );
}

export default UserNav;
