import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import UserMainWrapper from '../UserMainWrapper';
import UserVehicleCard from '../UserVehicleCard';



function UserDashPage() {

    const { setNavType } = useDriverKickContext();
    setNavType("userDash");

    return (
        <section>
            <GlobalNavBar />
            <UserMainWrapper>
                <UserVehicleCard />
            </UserMainWrapper>
        </section>
    );
}

export default UserDashPage;