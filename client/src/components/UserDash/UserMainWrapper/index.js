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

  // Uses ID param from url
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

    API.getVehicles()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        if (res.data.length === 0) {
          history.push("/add-vehicle");
        }
        setVehicleInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
            {vehicleInfo.map((v, index) => {
              const imgIndex = index % bgImages.length;
              return (
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
                  bgCardImage={bgImages[imgIndex].image}
                />
              );
            })}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default UserMainWrapper;
