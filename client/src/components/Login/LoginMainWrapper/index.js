import React from 'react';
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function LoginMainWrapper({ children, navbar }) {
    return (
        <section className="login-wrap__bg">
            <div>
                {navbar}
            </div>
            <div className="container login-wrap__main">
                <Row className="login-wrap__main--reverse">
                    <Col lg={5}>
                        {children}
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <h1 className="login__h1">
                            <span className="g__fiery-orange--txt">—</span>
                            <span className="login__h1--stack">
                                Welcome
                            </span>
                            <span className="login__h1--stack">
                                Back
                            </span>

                            <span className="login__h1--stack">
                                Let<span className="g__fiery-orange--txt">’</span>s get
                            </span>
                            <span className="login__h1--stack">
                                Tracking
                            </span>
                            <span className="g__fiery-orange--txt">—</span>

                        </h1>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default LoginMainWrapper;