import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from "../../images/global/drive-kick-logo-tan.svg";
import { FaPlus } from "react-icons/fa";



function UserNav({ newVehicleModalClick, logOutModalClick }) {
    return (
        <Navbar className="container justify-content-between flex-column flex-sm-row">

            <Navbar.Brand href="#home">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Drive Kick Logo"
                />
            </Navbar.Brand>

            <Nav>
                <Button onClick={newVehicleModalClick}><FaPlus />Add New Vehicle</Button>
                <Button onClick={logOutModalClick}>Log Out</Button>
            </Nav>

        </Navbar>
    );
}

export default UserNav;