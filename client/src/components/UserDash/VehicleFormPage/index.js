import React from 'react';
import "./style.css";
import UserMainWrapper from '../UserMainWrapper'
import UserNavBar from '../UserNavBar'
import UserNewVehicleForm from '../UserNewVehicleForm'
import { useDriverKickContext } from '../../../utils/DriverKickContext';

function VehicleFormPage() {
    const { setIsVehicleFormNav } = useDriverKickContext();
    setIsVehicleFormNav(true);


    return (

        <section>
            <UserNavBar />
            <UserMainWrapper>
                <UserNewVehicleForm />
            </UserMainWrapper>
        </section>

    );
}

export default VehicleFormPage;