import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";
import UserVehicleCard from '../UserVehicleCard';
import carIcons from "../../../utils/carIcons.json";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function UserMainWrapper() {
  const { userData, setUserData, selectValue, logout } = useDriverKickContext();

  // Stores vehicle info from the database
  const [vehicleInfo, setVehicleInfo] = useState([]);

  // Stores vehicle icon from the Switch 
  const [iconImage, setIconImage] = useState({});



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

  // START Switch for Car Icons ———————————————|
  useEffect(() => {
    switch (selectValue) {
      case "convertible":
        setIconImage(carIcons[0].image);
        break;
      case "miniVan":
        setIconImage(carIcons[1].image);
        break;
      case "motorcycle":
        setIconImage(carIcons[2].image);
        break;
      case "pickup":
        setIconImage(carIcons[3].image);
        break;
      case "rv":
        setIconImage(carIcons[4].image);
        break;
      case "sedan":
        setIconImage(carIcons[5].image);
        break;
      case "sportsCar":
        setIconImage(carIcons[6].image);
        break;
      case "suv":
        setIconImage(carIcons[7].image);
        break;
      case "van":
        setIconImage(carIcons[8].image);
        break;
      default:
        setIconImage(carIcons[5].image);
    }
  }, []);
  // END Switch for Car Icons ———————————————|

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
            {vehicleInfo.map(v => (
              <UserVehicleCard
                key={v._id}
                vehicleID={v._id}
                vehicleIcon={v.iconImage}
                vehicleMake={v.make}
                vehicleYear={v.year}
                vehicleModel={v.model}
                carNickname={v.nickname}
                ownerName={v.driverName}
                getLatestVehicles={getLatestVehicles}

              />
            ))}
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default UserMainWrapper;
