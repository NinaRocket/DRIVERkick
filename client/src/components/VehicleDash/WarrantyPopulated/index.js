import React from 'react';
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import openBtnIcon from "../../../images/vehiclepage/open-btn-icon.svg";
import closeBtnIcon from "../../../images/vehiclepage/close-btn-icon.svg";
import ContextAwareToggle from "../../../utils/ContextAwareToggle";


function WarrantyPopulated({ warrantyModal }) {

    const {
        accordionHelper,
    } = useDriverKickContext();


    return (

        <div className="warranty-card__body">
            <Accordion defaultActiveKey="1" className="vehicle-dash__accordion">
                <Card>
                    <ContextAwareToggle eventKey="0">
                        <Card.Header className="vehicle-dash__rule">
                            
                            <h1 className="g__dash-h1"></h1>
                            {accordionHelper ? (
                                <img
                                    src={closeBtnIcon}
                                    alt="Close icon"
                                    className="vehicle-dash__accordion-toggle"
                                />
                            ) : (
                                    <img
                                        src={openBtnIcon}
                                        alt="Open icon"
                                        className="vehicle-dash__accordion-toggle"
                                    />
                                )}
                        </Card.Header>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="text-center">
                            <div className="vehicle-dash__user-group">
                                <h4 className="g__card__subhead">Owner</h4>

                            </div>
                            <div className="vehicle-dash__user-group">
                                <h4 className="g__card__subhead">Model</h4>

                            </div>
                            <div className="vehicle-dash__user-group">
                                <h4 className="g__card__subhead">Make</h4>
                            </div>
                            <div>
                                <h4 className="g__card__subhead">Year</h4>

                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <button className="g__vehicle-card__btn" onClick={warrantyModal}>Update Milage</button>
        </div>



    );
}

export default WarrantyPopulated;