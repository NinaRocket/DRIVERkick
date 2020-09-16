import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import API from "./API";

const DriverKickContext = React.createContext();

export const useDriverKickContext = () => {
  return useContext(DriverKickContext);
};

function DriverKickRouter(props) {
  return <BrowserRouter {...props} />;
}

export function DriverKickProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function login() {
    setAuthenticated(true);
  }

  function logout(history) {
    setAuthenticated(false);
    // post route to logout session on backend
    API.logout();

    // Route them back to the homepage
    return history.push("/login");
  }

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    make: "N/A",
    model: "N/A",
    year: "N/A",
  });

  // Nav Bar States
  const [navType, setNavType] = useState("home");

  // navType Expects: "home" || "notFound" || "login" || "signup" || "newVehicle" || "userDash" || "vehicleDash"


  // Select Vehicle Type Options
  const [selectValue, setSelectValue] = useState();

  //   selectValue Expects: "sedan" || "suv" || "pickup" || "miniVan" || "van" || "sportsCar" || "convertible" || "rv" || "motorcycle"

  //vehicle ID for maintenance tracking
  const [vehID, setVehID] = useState();

  // Lets other components know to close the modal
  const [modalFormSubmit, setModalFormSubmit] = useState(false);


  // Determines if the initial content or populated content component show up.
  const [newUserMileage, setNewUserMileage] = useState(true);

  return (
    <DriverKickRouter>
      <DriverKickContext.Provider
        value={{
          login,
          logout,
          setUserData,
          userData,
          authenticated,
          setAuthenticated,
          navType,
          setNavType,
          selectValue,
          setSelectValue,
          vehID,
          setVehID,
          modalFormSubmit,
          setModalFormSubmit,
          newUserMileage,
          setNewUserMileage
        }}
      >
        {children}
      </DriverKickContext.Provider>
    </DriverKickRouter>
  );
}
