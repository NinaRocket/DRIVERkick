import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";
import UserVehicleCard from '../UserVehicleCard';
import bgImages from '../../../images/user-page/vehicleCardBgImages.json';
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function UserMainWrapper() {
  // Context import
  const { userData, setUserData, logout } = useDriverKickContext();

  // Stores vehicle info from the database
  const [vehicleInfo, setVehicleInfo] = useState([]);

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
    console.log(userData);

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


  const getLatestVehicles = () => {
    API.getVehicles()
      .then((res) => {
        if (res.data.isAuthenticated === false) {
          return logout(history);
        }
        setVehicleInfo(res.data);
      })
      .catch((err) => console.log(err));
  }




  return (
    <section className="g__dashboard-wrapper">
      <div className="container">
        <Row>
          <Col xl={3} className="g__dashboard-user-info">
            <h1 className="g__dash-h1">Welcome {userData.firstName}</h1>
            <p>
              Here are the vehicles you are tracking maintenance for. Add new
              ones at any time!
            </p>
          </Col>
          <Col xl={1}></Col>
          <Col xl={8}>
            {vehicleInfo.map(v => (
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
                bgCardImage={bgImages[6].image}

              />
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default UserMainWrapper;
