import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";

function UserMainContentWrapper({ children }) {
  const [user, setUser] = useState({});

  const { id } = useParams();
  useEffect(() => {
    API.getUser(id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
    console.log(user);
  }, []);
  console.log(user);
  return (
    <section>
      <Row>
        <Col lg={3}>
          <h1>Welcome {user.firstName}</h1>
          <p>
            Here are the vehicles you are tracking maintenance for. Add new ones
            at any time!
          </p>
        </Col>
        <Col lg={1}></Col>
        <Col lg={8}>{children}</Col>
      </Row>
    </section>
  );
}

export default UserMainContentWrapper;