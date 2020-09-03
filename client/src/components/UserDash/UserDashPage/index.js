import React from 'react';
import "./style.css";
import UserMainWrapper from '../UserMainWrapper';
import UserNavBar from '../UserNavBar';
import UserVehicleCard from '../UserVehicleCard';
import { useDriverKickContext } from '../../../utils/DriverKickContext';



function UserDashPage() {

    const { setIsVehicleFormNav } = useDriverKickContext();
    setIsVehicleFormNav(false);

    return (
        <section>
            <UserNavBar />
            <UserMainWrapper>
                <UserVehicleCard />
            </UserMainWrapper>
        </section>
    );
}

export default UserDashPage;