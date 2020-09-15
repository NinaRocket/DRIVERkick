import React, { useEffect } from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import UserMainWrapper from "../UserMainWrapper";
import API from "../../../utils/API";

function UserDashPage() {
  const { setNavType, logout } = useDriverKickContext();

  // Controls which buttons in the nav bar to use
  useEffect(() => setNavType("userDash"), []);

  return (
    <section>
      <GlobalNavBar />
      <UserMainWrapper />
    </section>
  );
}

export default UserDashPage;
