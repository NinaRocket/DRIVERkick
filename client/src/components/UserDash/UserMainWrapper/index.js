import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";

function UserMainWrapper({ children }) {
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
        <section className="g__dashboard-wrapper">
            <div className="container">
                <Row>
                    <Col lg={3}>
                        <h1 className="g__dash-h1">Welcome {user.firstName}</h1>
                        <p>Here are the vehicles you are tracking maintenance for. Add new ones
                            at any time!</p>

                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>{children}</Col>
                </Row>
            </div>
        </section >
    );
}

export default UserMainWrapper;