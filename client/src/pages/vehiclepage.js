import React from "react";
import Container from "react-bootstrap/Container";
import HomeNav from "../components/HomeNavbar";
import MileageCard from "../components/MileageCard";
import WarrantyCard from "../components/WarrantyCard";

function VehiclePage() {
  return (
    <Container>
      <HomeNav></HomeNav>
      <MileageCard></MileageCard>
      <WarrantyCard></WarrantyCard>
    </Container>
  );
}

export default VehiclePage;
