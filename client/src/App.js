import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import { DriverKickProvider } from './utils/DriverKickContext';
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
          <DriverKickProvider>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/add-vehicle" component={VehicleFormPage} />
            <Route exact path="/user-dashboard" component={UserDashPage} />
            <Route exact path="/vehicle-dashboard" component={VehicleDashPage} />
          </DriverKickProvider>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;