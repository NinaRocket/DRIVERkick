import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import UserMainWrapper from '../UserMainWrapper'
import UserNewVehicleForm from '../UserNewVehicleForm'


function VehicleFormPage() {
    const { setNavType } = useDriverKickContext();
    setNavType("newVehicle");


    return (

        <section>
            <GlobalNavBar />
            <UserMainWrapper>
                <UserNewVehicleForm />
            </UserMainWrapper>
        </section>

    );
}

export default VehicleFormPage;