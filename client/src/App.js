import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import { DriverKickProvider } from "./utils/DriverKickContext";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import VehicleFormPage from "./components/UserDash/VehicleFormPage";
import UserDashPage from "./components/UserDash/UserDashPage";
import VehicleDashPage from "./components/VehicleDash/VehicleDashPage";
import NotFoundPage from "./components/NotFoundPage";
import ReactGA from 'react-ga';


function App() {
  // Google Analytics Page Tracking
  useEffect(() => {
    ReactGA.initialize('UA-122656834-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  
  return (
    <>
      <DriverKickProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/add-vehicle" component={VehicleFormPage} />
          <Route exact path="/user-dashboard" component={UserDashPage} />
          <Route
            exact
            path="/vehicle-dashboard/:id"
            component={VehicleDashPage}
          />
          <NotFoundPage />
        </Switch>
      </DriverKickProvider>
      <Footer />
    </>
  );
}

export default App;
