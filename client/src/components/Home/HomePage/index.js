import React, { useEffect } from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import HomeHero from "../HomeHero";
import HomeFeatureBlock from "../HomeFeatureBlock";

function HomePage() {
  const { setNavType } = useDriverKickContext();
  useEffect(() => setNavType("home"), []);

  return (
    <div>
      <GlobalNavBar />
      <HomeHero />
      <HomeFeatureBlock />
    </div>
  );
}

export default HomePage;
