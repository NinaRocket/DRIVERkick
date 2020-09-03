import React from 'react';
import "./style.css";
import VehicleNavBar from '../VehicleNavBar';
import VehicleMainWrapper from '../VehicleMainWrapper';
import MileageTrackerCard from '../MileageTrackerCard';
import VehicleOilChangeCard from '../VehicleOilChangeCard';
import VehicleWarrantyCard from '../VehicleWarrantyCard';
import VehicleRecallsCard from '../VehicleRecallsCard';


function VehicleDashPage() {
    return (
        <div>
            <VehicleNavBar />
            <VehicleMainWrapper>
                <MileageTrackerCard />
                <VehicleOilChangeCard />
                <VehicleWarrantyCard />
                <VehicleRecallsCard />
            </VehicleMainWrapper>
        </div>
    );
}

export default VehicleDashPage;