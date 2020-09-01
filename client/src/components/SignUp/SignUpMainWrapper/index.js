import React from 'react';
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignUpMainWrapper({ children }) {
    return (
        <section className="sign-wrap__bg">
            <div className="container">
                <Row>
                    <Col lg={5}>
                        {children}
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <h1 className="text-white">
                            Kick Your<br />
                            <span className="g__fiery-orange--txt">Car Health</span><br />
                            Into High<br />
                        Gear
                    </h1>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default SignUpMainWrapper;