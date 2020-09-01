import React from 'react';
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginMainWrapper({ children }) {
    return (
        <section className="log-wrap__bg">
            <Row>
                <Col lg={5}>
                    {children}
                </Col>
                <Col lg={1}></Col>
                <Col lg={6}>
                    <h1 className="text-white">
                        Welcome<br />
                        Back<br />
                        Let<span className="g__fiery-orange--txt">’</span>s get<br />
                        tracking
                    </h1>
                </Col>
            </Row>
        </section>
    );
}

export default LoginMainWrapper;