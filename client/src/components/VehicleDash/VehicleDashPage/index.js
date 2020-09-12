import React from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import VehicleMainWrapper from "../VehicleMainWrapper";
import MileageTrackerCard from "../MileageTrackerCard";
import WarrantyCard from "../WarrantyCard";
import RecallsCard from "../RecallsCard";
import OilChangeCard from "../OilChangeCard";


function VehicleDashPage() {
  // Sets which buttons show in the nav
  const { setNavType } = useDriverKickContext();
  setNavType("vehicleDash");

  return (
    <div>

      <GlobalNavBar />
      <VehicleMainWrapper>
        <MileageTrackerCard />
        <OilChangeCard />
        <WarrantyCard />
        <RecallsCard />
      </VehicleMainWrapper>

    </div>
  );
}

export default VehicleDashPage;
