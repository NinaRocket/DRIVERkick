import React, { useEffect } from "react";
import "./style.css";
import { useParams, useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

function UserMainWrapper({ children }) {
  const { userData, setUserData, logout } = useDriverKickContext();
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
  }, []);

  return (
    <section className="g__dashboard-wrapper">
      <div className="container">
        <Row>
          <Col lg={3}>
            <h1 className="g__dash-h1">Welcome {userData.firstName}</h1>
            <p>
              Here are the vehicles you are tracking maintenance for. Add new
              ones at any time!
            </p>
          </Col>
          <Col lg={1}></Col>
          <Col lg={8}>{children}</Col>
        </Row>
      </div>
    </section>
  );
}

export default UserMainWrapper;
