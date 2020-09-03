import React from 'react';
import "./style.css";
import VehicleNavBar from '../VehicleNavBar';
import VehicleMainWrapper from '../VehicleMainWrapper';
import MileageTrackerCard from '../MileageTrackerCard';
import VehicleOilChangeCard from '../VehicleOilChangeCard';
import VehicleWarrantyCard from '../VehicleWarrantyCard';
import VehicleRecallsCard from '../VehicleRecallsCard';
import VehicleCurrentMileageForm from '../VehicleCurrentMileageForm';


const mileageModal = () => {
    console.log("Milage Modal To Open")
}




function VehicleDashPage() {
    return (
        <div>
            {/* Add modal for mileage */}
            <VehicleCurrentMileageForm />
            <VehicleNavBar />
            <VehicleMainWrapper>
                <MileageTrackerCard mileageTrackingModal={mileageModal} />
                {/* <VehicleOilChangeCard />
                <VehicleWarrantyCard />
                <VehicleRecallsCard /> */}
            </VehicleMainWrapper>
        </div>
    );
}

export default VehicleDashPage;