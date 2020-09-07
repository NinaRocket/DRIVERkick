import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import ContextAwareToggle from "../../../utils/ContextAwareToggle"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion';
import openBtnIcon from "../../../images/vehiclepage/open-btn-icon.svg";
import closeBtnIcon from "../../../images/vehiclepage/close-btn-icon.svg";
import API from "../../../utils/API";
import carIcons from "../../../utils/carIcons.json";
import { useDriverKickContext } from "../../../utils/DriverKickContext";


function VehicleMainWrapper({ children }) {
  const [user, setUser] = useState({});
  const { accordionHelper } = useDriverKickContext();

  const { id } = useParams();
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
    console.log(user);
  }, []);
  console.log(user);
  // const { id } = useParams();

  //   useEffect(() => {
  //     API.getDecodeVIN()
  //       .then((res) => setUser(res.data))
  //       .catch((err) => console.log(err));
  //     console.log(VIN);
  //   }, []);

  console.log(carIcons[0].image)
  return (
    <section className="g__dashboard-wrapper">
      <img src={carIcons[0].image} />
      <div className="container">
        <Row>
          <Col lg={3}>

            <Accordion defaultActiveKey="1" className="vehicle-dash__accordion">
              <Card>
                <ContextAwareToggle eventKey="0" >
                  <Card.Header className="vehicle-dash__rule">
                    <img src={carIcons[0].image} alt="Car icon" className="vehicle-dash__user-img" />
                    <h1 className="g__dash-h1">Radical Roadster</h1>
                    {
                      accordionHelper ?
                        < img src={closeBtnIcon} alt="Close icon" className="vehicle-dash__accordion-toggle" /> :
                        <img src={openBtnIcon} alt="Open icon" className="vehicle-dash__accordion-toggle" />

                    }
                  </Card.Header>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="text-center">
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Owner</h4>
                      <h3>Linnea Gear</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Model</h4>
                      <h3>Coup</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Make</h4>
                      <h3>Toyota</h3>
                    </div>
                    <div>
                      <h4 className="g__card__subhead">Year</h4>
                      <h3>2001</h3>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col lg={1}></Col>
          <Col lg={8}>{children}</Col>
        </Row>
      </div>
    </section>
  );
}

export default VehicleMainWrapper;
