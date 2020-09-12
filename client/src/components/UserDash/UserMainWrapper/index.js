import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";
import UserVehicleCard from "../UserVehicleCard";
import bgImages from "../../../images/user-page/vehicleCardBgImages.json";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function UserMainWrapper() {
  // Context import
  const { userData, setUserData, logout } = useDriverKickContext();

  // Stores vehicle info from the database
  const [vehicleInfo, setVehicleInfo] = useState([]);

  // Sets up page redirect
  const history = useHistory();

  const { id } = useParams();

  // API Call for User and Vehicle Info
  useEffect(() => {
    API.getUser()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }

        setUserData({ ...userData, ...res.data });
      })
      .catch((err) => console.log(err));
    console.log(userData);

    API.getVehicles()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        console.log(res.data);
        if (res.data.length === 0) {
          history.push("/add-vehicle");
        }
        setVehicleInfo(res.data);
        console.log(vehicleInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  // NEED TO WORK ON THIS
  // Checks to see if the user has vehicles, if not they get kicked back to the Add Vehicle screen
  // useEffect(() => {
  //   console.log(vehicleInfo)
  //   if (vehicleInfo.length === 0) {
  //     history.push("/add-vehicle")
  //   } else {
  //     return;
  //   }
  // }, [vehicleInfo])

  const getLatestVehicles = () => {
    API.getVehicles()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        setVehicleInfo(res.data);
      })
      .catch((err) => console.log(err));
  };
  //console.log(vehicleInfo[0].make);
  return (
    <section className="g__dashboard-wrapper">
      <div className="container">
        <Row>
          <Col lg={3} className="g__dashboard-user-info">
            <h1 className="g__dash-h1">Welcome {userData.firstName}</h1>
            <p>
              Here are the vehicles you are tracking maintenance for. Add new
              ones at any time!
            </p>
          </Col>
          <Col lg={1}></Col>
          <Col lg={8}>
            {vehicleInfo.map((v) => (
              <UserVehicleCard
                key={v._id}
                vehicleID={v._id}
                vehicleIcon={v.icon}
                vehicleMake={v.make}
                vehicleYear={v.year}
                vehicleModel={v.model}
                carNickname={v.nickname}
                ownerName={v.driverName}
                getLatestVehicles={getLatestVehicles}
                bgCardImage={bgImages[2].image}
              />
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default UserMainWrapper;
