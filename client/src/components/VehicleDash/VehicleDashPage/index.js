import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import API from "../../../utils/API";
import GlobalNavBar from "../../GlobalNavBar";
import VehicleMainWrapper from "../VehicleMainWrapper";
import MileageTrackerCard from "../MileageTrackerCard";
import WarrantyCard from "../WarrantyCard";
import RecallsCard from "../RecallsCard";
import OilChangeCard from "../OilChangeCard";

function VehicleDashPage() {
  // Sets which buttons show in the nav
  const {
    setNavType,
    userData,
    setUserData,
    logout,
    vehID,
    setVehID,
  } = useDriverKickContext();
  const { id } = useParams();

  setNavType("vehicleDash");
  useEffect(() => {
    setVehID(id);
  }, [id]);

  const history = useHistory();

  const vehicleTemplate = {
    VIN: "",
    year: "",
    make: "",
    model: "",
    icon: "",
    driverName: "",
    nickname: "",
    currentMileage: "",
    nextOilChange: "",
    oilType: "",
    warranties: [],
    _id: vehID,
  };

  const [vehicleInfo, setVehicleInfo] = useState(vehicleTemplate);

  async function getInfo() {
    try {
      const fetchUser = await API.getUser();
      const fetchVehicles = await API.getVehicleById(vehID);

      console.log(fetchVehicles.data[0]);

      if (
        fetchUser.data.isAuthenticated === false ||
        fetchVehicles.data.isAuthenticated === false
      ) {
        return logout(history);
      }

      setUserData({
        ...userData,
        ...fetchUser.data,
        ...fetchVehicles.data[0],
      });
      setVehicleInfo(fetchVehicles.data[0]);
      console.log(vehicleInfo);
    } catch (error) {
      console.log(error);
    }
  }
  // REACT'S SUGGESTED ASYNC USE-EFFECT SYNTAX
  useEffect(() => {
    console.log(vehID);
    if (vehID) {
      getInfo();
    }
  }, [vehID]);

  console.log(vehicleInfo);

  return (
    <div>
      <GlobalNavBar />
      <VehicleMainWrapper vehicleInfo={vehicleInfo} userData={userData}>
        <MileageTrackerCard vehicleInfo={vehicleInfo} />
        {/* <OilChangeCard /> */}
        <WarrantyCard />
        <RecallsCard />
      </VehicleMainWrapper>
    </div>
  );
}

export default VehicleDashPage;
