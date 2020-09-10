import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import ContextAwareToggle from "../../../utils/ContextAwareToggle"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from 'react-bootstrap/Accordion';
import openBtnIcon from "../../../images/vehiclepage/open-btn-icon.svg";
import closeBtnIcon from "../../../images/vehiclepage/close-btn-icon.svg";
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";


function VehicleMainWrapper({ children }) {
  const { 
    userData, 
    setUserData, 
    accordionHelper,
    logout 
  } = useDriverKickContext();

  const [vehicleInfo, setVehicleInfo] = useState();

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    API.getUser(id)
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        setUserData({ ...userData, ...res.data });
      })
      .catch((err) => console.log(err));

    API.getVehicles()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        setVehicleInfo(res.data);
        console.log(res.data)
      })
      .catch((err) => console.log(err));

  }, []);

  console.log(vehicleInfo)

  return (
    <section className="g__dashboard-wrapper">
      <div className="container">
        <Row>
          <Col lg={3}>

            <Accordion defaultActiveKey="1" className="vehicle-dash__accordion">
              <Card>
                <ContextAwareToggle eventKey="0" >
                  <Card.Header className="vehicle-dash__rule">
                    <img src={"vehicleInfo.icon"} alt="Car icon" className="vehicle-dash__user-img" />
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
                      <h3>{userData.firstName}</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Model</h4>
                      <h3>{"vehicleInfo.model"}</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Make</h4>
                      <h3>{"vehicleInfo.make"}</h3>
                    </div>
                    <div>
                      <h4 className="g__card__subhead">Year</h4>
                      <h3>{"vehicleInfo.year"}</h3>
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
