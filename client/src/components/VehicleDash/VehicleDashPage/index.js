import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import VehicleMainWrapper from '../VehicleMainWrapper';
import MileageTrackerCard from '../MileageTrackerCard';
import VehicleOilChangeCard from '../VehicleOilChangeCard';
import VehicleWarrantyCard from '../VehicleWarrantyCard';
import VehicleRecallsCard from '../VehicleRecallsCard';
import VehicleCurrentMileageForm from '../VehicleCurrentMileageForm';


function VehicleDashPage() {

    const { setNavType } = useDriverKickContext();
    setNavType("vehicleDash");


    const mileageModal = () => {
        console.log("Milage Modal To Open")
    }


    return (
        <div>
            {/* Add modal for mileage */}
            <VehicleCurrentMileageForm />
            <GlobalNavBar />
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