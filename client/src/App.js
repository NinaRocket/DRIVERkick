import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import UserPage from "./pages/userpage";
import VehiclePage from "./pages/vehiclepage";
import Home from "./pages/home";
// import Footer from "./components/Footer";
import "./App.css";
import { DriverKickProvider } from './utils/DriverKickContext';

// Staging comps from new folder structure -------|
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import VehicleFormPage from "./components/UserDash/VehicleFormPage";
import UserDashPage from "./components/UserDash/UserDashPage";
import VehicleDashPage from "./components/VehicleDash/VehicleDashPage";

// Need code to route non authenticated users to the the homepage and authenticated users to the User Dashboard

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/vehiclepage" component={VehiclePage} />
          <DriverKickProvider>
            <Route exact path="/stage-home" component={HomePage} />
            <Route exact path="/stage-login" component={LoginPage} />
            <Route exact path="/stage-signup" component={SignUpPage} />
            <Route exact path="/stage-vehicle-form" component={VehicleFormPage} />
            <Route exact path="/stage-user-dashboard" component={UserDashPage} />
            <Route exact path="/stage-vehicle-dashboard" component={VehicleDashPage} />
          </DriverKickProvider>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;