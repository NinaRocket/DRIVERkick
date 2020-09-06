import React from 'react';
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignUpMainWrapper({ children, navbar }) {
    return (
        <section className="sign-wrap__bg">
            <div>
                {navbar}
            </div>
            <div className="container signup-wrap__main">
                <Row className="signup-wrap__main--reverse">
                    <Col lg={5}>
                        {children}
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <h1 className="signup__h1">
                            <span className="g__fiery-orange--txt">—</span>
                            <span className="signup__h1--stack">Kick Your</span>

                            <span className="signup__h1--stack"><span className="g__fiery-orange--txt">Car Health</span></span>

                            <span className="signup__h1--stack">
                                Into High
                            </span>
                            <span className="signup__h1--stack">
                                gear
                            </span>
                            <span className="g__fiery-orange--txt">—</span>
                    </h1>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default SignUpMainWrapper;