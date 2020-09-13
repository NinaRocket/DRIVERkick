import React, { useEffect } from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import SignUpMainWrapper from "../SignUpMainWrapper";
import SignUpForm from "../SignUpForm";

function SignUpPage() {
  const { setNavType } = useDriverKickContext();
  useEffect(() => setNavType("signup"), []);
  return (
    <div>
      <SignUpMainWrapper navbar={<GlobalNavBar />}>
        <SignUpForm />
      </SignUpMainWrapper>
    </div>
  );
}

export default SignUpPage;
