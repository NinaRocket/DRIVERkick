import React, { useState } from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Logo from "../../../images/global/drive-kick-logo-tan.svg";
import { FaPlus } from "react-icons/fa";
import VehicleForm from "../UserNewVehicleForm";

function UserNavBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logout = () => {
        // Need to close out session and front end logout. Perhaps handling this through context.
        console.log("Logout btn")
    }


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
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Add New Vehicle</Button>
                </Modal.Footer>
            </Modal>
            <div className="g__nav-dashboards">
                <Navbar className="container navbar justify-content-between flex-column flex-sm-row ">
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            className="d-inline-block align-top"
                            alt="Drive Kick Logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <div className="g__nav-btn-group">
                            <Button className="btn" onClick={handleShow}><FaPlus />Add New Vehicle</Button>
                            <button
                                type="button"
                                className="btn"
                                onClick={logout}
                            >
                                Logout
                        </button>
                        </div>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default UserNavBar;