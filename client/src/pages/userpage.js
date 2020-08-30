import React from "react";
import Container from "react-bootstrap/Container";
import AddVehicleModalForm from "../components/AddVehicleModalForm";
import UserNav from "../components/UserNav";
import UserWrapper from "../components/UserMainContentWrapper";
import UserVehicleCard from "../components/UserVehicleCard";

function UserPage() {
  return (
    <Container>
      <UserNav />
      <UserWrapper>
        <UserVehicleCard />
      </UserWrapper>
    </Container>
  );
}

export default UserPage;
