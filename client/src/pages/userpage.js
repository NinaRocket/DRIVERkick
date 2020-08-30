import React from "react";
import Container from "react-bootstrap/Container";
import AddVehicleModalForm from "../components/AddVehicleModalForm";
import UserNav from "../components/UserNav";
import UserWrapper from "../components/UserMainContentWrapper";

function UserPage() {
  return (
    <Container>
      <UserNav></UserNav>
      <UserWrapper></UserWrapper>
    </Container>
  );
}

export default UserPage;
