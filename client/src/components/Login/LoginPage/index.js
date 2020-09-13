import React, {useEffect} from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import LoginMainWrapper from "../LoginMainWrapper";
import LoginForm from "../LoginForm";

function LoginPage() {
  const { setNavType } = useDriverKickContext();
  useEffect(() => setNavType("login"), []);

  return (
    <div>
      
      <LoginMainWrapper navbar={<GlobalNavBar />}>
        <LoginForm />
      </LoginMainWrapper>
    </div>
  );
}

export default LoginPage;
