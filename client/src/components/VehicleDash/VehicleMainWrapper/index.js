import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../../utils/API";
import placeholder from "../../../images/vehiclepage/car-placeholder.jpeg"

function VehicleMainWrapper({ children }) {
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
                        <img style={{"width": 50}} src={placeholder} alt="Model car"/>
                        <h1 className="g__dash-h1">Radical Roadster</h1>
                        <hr />
                        <div>
                            <h4>Owner</h4>
                            <h3>Linnea Gear</h3>
                        </div>
                        <div>
                            <h4>Model</h4>
                            <h3>Coup</h3>
                        </div>
                        <div>
                            <h4>Make</h4>
                            <h3>Toyota</h3>
                        </div>
                        <div>
                            <h4>Year</h4>
                            <h3>2001</h3>
                        </div>

                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>{children}</Col>
                </Row>
            </div>
        </section >
    );
}

export default VehicleMainWrapper;