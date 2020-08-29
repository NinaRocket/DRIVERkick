import React from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserMainContentWrapper({ children }) {
    return (
        <section>
            <Row>
                <Col lg={3}>
                    <h1>Welcome User</h1>
                    <p>Here are the vehicles you are tracking maintenance for. Add new ones at any time!</p>
                </Col>
                <Col lg={1}>
                 
                </Col>
                <Col lg={8}>
                    {children}
                </Col>
            </Row>
        </section>
    );
}

export default UserMainContentWrapper;