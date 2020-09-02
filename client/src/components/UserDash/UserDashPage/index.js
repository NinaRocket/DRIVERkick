import React from 'react';
import "./style.css";
import UserMainWrapper from '../UserMainWrapper'
import UserNavBar from '../UserNavBar'
import UserVehicleCard from '../UserVehicleCard'

function UserDashPage() {
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