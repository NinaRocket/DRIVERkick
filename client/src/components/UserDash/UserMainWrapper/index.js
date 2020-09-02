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


    // Edit Code ——————————|
    const [edit, setEdit] = useState(false);
    const [customTxt, setCustomTxt] = useState();
    const editFunc = () => {
        setEdit(true)
    }

    const saveFunc = () => {
        const ctext = document.getElementById("intro");
        setCustomTxt(ctext)
        setEdit(false)
    }
    // Edit Code ——————————|


    return (
        <section className="g__dashboard-wrapper">
            <div className="container">
                <Row>
                    <Col lg={3}>
                        <h1 className="g__dash-h1">Welcome {user.firstName}</h1>
                        <p>Here are the vehicles you are tracking maintenance for. Add new ones
                            at any time!</p>
                        {/* // Edit Code ——————————|     */}
                        <h1 contentEditable={edit} id="editVal">{!customTxt ? "Edit Me" : customTxt}</h1>
                        <button onClick={editFunc}>Edit</button>
                        <button onClick={saveFunc}>Save</button>
                        {/* // Edit Code ——————————|     */}
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={8}>{children}</Col>
                </Row>
            </div>
        </section >
    );
}

export default UserMainWrapper;