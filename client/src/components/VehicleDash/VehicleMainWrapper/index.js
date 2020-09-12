import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import openBtnIcon from "../../../images/vehiclepage/open-btn-icon.svg";
import closeBtnIcon from "../../../images/vehiclepage/close-btn-icon.svg";
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';


// ACCORDION HELPER COMPONENT ==========================
function ContextAwareToggle({ children, eventKey, callback, accordionHelper, setAccordionHelper }) {


  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {
      callback && callback(eventKey)
      accordionHelper ? setAccordionHelper(false) : setAccordionHelper(true)
    }
  );

  return (
    <button
      type="button"
      className="g__btn-reset g__btn-accordion"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


// MAIN WRAPPER COMPONENT ==============================
function VehicleMainWrapper({ children }) {
  const {
    userData,
    setUserData,
    logout,
    vehID,
  } = useDriverKickContext();

  // Sets state for accordion
  const [accordionHelper, setAccordionHelper] = useState(false);

  const vehicleTemplate = {
    VIN: "",
    year: "",
    make: "",
    model: "",
    icon: "",
    driverName: "",
    nickname: "",
    currentMileage: "",
    nextOilChange: "",
    oilType: "",
    warranties: [],
  };

  const [vehicleInfo, setVehicleInfo] = useState(vehicleTemplate);

  const history = useHistory();

  const { id } = useParams();

  // REACT'S SUGGESTED ASYNC USE-EFFECT SYNTAX
  useEffect(() => {
    async function getInfo() {
      try {
        const fetchUser = await API.getUser(id);
        const fetchVehicles = await API.getVehicleById(vehID);

        console.log(fetchVehicles.data[0]);

        if (
          fetchUser.data.isAuthenticated === false ||
          fetchVehicles.data.isAuthenticated === false
        ) {
          return logout(history);
        }

        setUserData({ ...userData, ...fetchUser.data });
        setVehicleInfo(fetchVehicles.data[0]);
        console.log(vehicleInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getInfo()
  }, []);


  // OUR ORIGINAL ASYNC USEEFFECT
  // useEffect(async () => {
  //   try {
  //     const fetchUser = await API.getUser(id);
  //     const fetchVehicles = await API.getVehicleById(vehID);

  //     console.log(fetchVehicles.data[0]);

  //     if (
  //       fetchUser.data.isAuthenticated === false ||
  //       fetchVehicles.data.isAuthenticated === false
  //     ) {
  //       return logout(history);
  //     }

  //     setUserData({ ...userData, ...fetchUser.data });
  //     setVehicleInfo(fetchVehicles.data[0]);
  //     console.log(vehicleInfo);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // NON-ASYNC USE EFFECT
  // useEffect(() => {
  //   API.getUser(id)
  //     .then((res) => {
  //       if (res.data.isAuthenticated === false) {
  //         return logout(history);
  //       }
  //       setUserData({ ...userData, ...res.data });
  //     })
  //     .catch((err) => console.log(err));

  //   //const { vehID } = useParams();
  //   API.getVehicleById(vehID)
  //     .then((res) => {
  //       if (res.data.isAuthenticated === false) {
  //         return logout(history);
  //       }
  //       setVehicleInfo(res.data[0]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  console.log(vehID);
  console.log(vehicleInfo);

  return (
    <section className="g__dashboard-wrapper">
      <div className="container">
        <Row>
          <Col lg={3}>
            <Accordion defaultActiveKey="1" className="vehicle-dash__accordion">
              <Card>
                <ContextAwareToggle eventKey="0" accordionHelper={accordionHelper} setAccordionHelper={setAccordionHelper}>
                  <Card.Header className="vehicle-dash__rule">
                    <img
                      src={vehicleInfo.icon}
                      alt="Car icon"
                      className="vehicle-dash__user-img"
                    />
                    <h1 className="g__dash-h1">{vehicleInfo.nickname}</h1>
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
                      <h3>{userData.firstName}</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Model</h4>
                      <h3>{vehicleInfo.model}</h3>
                    </div>
                    <div className="vehicle-dash__user-group">
                      <h4 className="g__card__subhead">Make</h4>
                      <h3>{vehicleInfo.make}</h3>
                    </div>
                    <div>
                      <h4 className="g__card__subhead">Year</h4>
                      <h3>{vehicleInfo.year}</h3>
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
