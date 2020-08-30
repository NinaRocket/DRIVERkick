import React from "react";
import Container from "react-bootstrap/Container";
import HomeNav from "../components/HomeNavbar";
import MileageCard from "../components/MileageCard";

function VehiclePage() {
  return (
    <Container>
      <HomeNav></HomeNav>
      <MileageCard></MileageCard>
    </Container>
  );
}

export default VehiclePage;
