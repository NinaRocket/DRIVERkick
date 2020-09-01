import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import UserPage from "./pages/userpage";
import VehiclePage from "./pages/vehiclepage";
import Home from "./pages/home";
//import Footer from "./components/Footer";
import "./App.css";
import StageHome from "./components/Home/HomePage";
import StageLogin from "./components/Login/LoginPage";

// Need code to route non authenticated users to the the homepage and authenticated users to the User Dashboard

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userpage" component={UserPage} />
        <Route exact path="/vehiclepage" component={VehiclePage} />
        <Route exact path="/stagehome" component={StageHome} />
        <Route exact path="/stagelogin" component={StageLogin} />
      </Switch>
    </Router>
  );
}

export default App;