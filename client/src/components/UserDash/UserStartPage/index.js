import React from 'react';
import "./style.css";
import UserMainWrapper from '../UserMainWrapper'
import UserNavBar from '../UserNavBar'
import UserNewVehicleForm from '../UserNewVehicleForm'

function UserStartPage() {
    return (
        <section>
            <UserNavBar />
            <UserMainWrapper>
                <UserNewVehicleForm />
            </UserMainWrapper>
        </section>
    );
}

export default UserStartPage;