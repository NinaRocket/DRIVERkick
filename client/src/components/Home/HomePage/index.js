import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import HomeHero from "../HomeHero";
import HomeFeatureBlock from "../HomeFeatureBlock";
import API from "../../../utils/API";


function HomePage() {
  const { setNavType } = useDriverKickContext();
  useEffect(() => setNavType("home"), []);

  // Sets redirects to other pages
  const redirect = useHistory();

  //  Routes the user back to the user dashboard if logged in
  API.homeLoginCheck().then((res) => {
    if (res.data.isAuthenticated === true) {
      redirect.push("/user-dashboard");
    } else {
      return;
    }
  })


  return (
    <div>
      <GlobalNavBar />
      <HomeHero />
      <HomeFeatureBlock />
    </div>
  );
}

export default HomePage;
