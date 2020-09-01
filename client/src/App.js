import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import UserPage from "./pages/userpage";
import VehiclePage from "./pages/vehiclepage";
import Home from "./pages/home";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/userpage" component={UserPage} />
              <Route exact path="/vehiclepage" component={VehiclePage} />
            </Switch>
          </Wrapper>
        </Container>
      </div>
    </Router>
  );
}

export default App;
