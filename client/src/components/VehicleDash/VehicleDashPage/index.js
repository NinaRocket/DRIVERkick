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
import Axios from "axios";

function VehicleDashPage() {
  // Sets which buttons show in the nav
  const {
    setNavType,
    userData,
    setUserData,
    logout,
    vehID,
    setVehID,
    setNewUser,
  } = useDriverKickContext();
  const { id } = useParams();

  useEffect(() => setNavType("vehicleDash"), []);

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
    mileageHistory: [],
    nextOilChange: "",
    oilType: "",
    warranties: [],
    _id: vehID,
  };

  const [vehicleInfo, setVehicleInfo] = useState(vehicleTemplate);
  const [mileageHistory, setMileageHistory] = useState([]);
  const [oilData, setOilData] = useState([]);
  const [warrantyData, setWarrantyData] = useState([]);

  async function getInfo() {
    try {
      const fetchUser = await API.getUser();
      const fetchVehicles = await API.getVehicleById(vehID);
      const fetchOilData = await API.getOilChangeInfo(vehID);
      const fetchWarranty = await API.getAllWarranties(vehID);

      if (
        fetchUser.data.isAuthenticated === false ||
        fetchVehicles.data.isAuthenticated === false ||
        fetchOilData.data.isAuthenticated === false ||
        fetchWarranty.data.isAuthenticated === false
      ) {
        return logout(history);
      }

      setUserData({
        ...userData,
        ...fetchUser.data,
        ...fetchVehicles.data[0],
        ...fetchOilData.data,
        ...fetchWarranty.data,
      });
      setVehicleInfo(fetchVehicles.data[0]);
      setMileageHistory(fetchVehicles.mileageHistory);
      setOilData(fetchOilData.data);
      setWarrantyData(fetchWarranty.data);
    } catch (error) {
      //console.log(error);
    }
    console.log(mileageHistory);
  }
  // REACT'S SUGGESTED ASYNC USE-EFFECT SYNTAX
  useEffect(() => {
    //console.log(vehID);
    if (vehID) {
      getInfo();
    }
  }, [vehID]);

  return (
    <div>
      <GlobalNavBar />
      <VehicleMainWrapper
        vehicleInfo={vehicleInfo}
        userData={userData}
        getInfo={getInfo}
      >
        <MileageTrackerCard vehicleInfo={vehicleInfo} getInfo={getInfo} />
        <OilChangeCard
          oilData={oilData}
          vehicleInfo={vehicleInfo}
          getInfo={getInfo}
        />
        <WarrantyCard
          vehicleInfo={vehicleInfo}
          getInfo={getInfo}
          warranty={warrantyData}
        />
        <RecallsCard />
      </VehicleMainWrapper>
    </div>
  );
}

export default VehicleDashPage;
