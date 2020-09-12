import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import UserMainWrapper from '../UserMainWrapper';
import API from "../../../utils/API";



function UserDashPage() {

    const { setNavType, logout } = useDriverKickContext();

    // Controls which buttons in the nav bar to use 
    setNavType("userDash");


    //redirect to vehicle dashboard
    const redirect = useHistory();

    return (
        <section>
            <GlobalNavBar />
            <UserMainWrapper />
        </section>
    );
}

export default UserDashPage;