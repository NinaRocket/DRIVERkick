import React, { useContext, useState } from "react";
import { BrowserRouter, Redirect } from "react-router-dom";

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

    // const [vehicleData, setVehicleData] = useState({
    //     vehicle: [],
    //     warranty: [],
    // });

    // Nav Bar States
    const [navType, setNavType] = useState("home");

    // navType Expects: "home" || "notFound" || "login" || "signup" || "newVehicle" || "userDash" || "vehicleDash"

    // Accordion Bootstrap Helper Context
    const [accordionHelper, setAccordionHelper] = useState(false);


    // Select Vehicle Type Options
    const [selectValue, setSelectValue] = useState();

    //   selectValue Expects: "sedan" || "suv" || "pickup" || "miniVan" || "van" || "sportsCar" || "convertible" || "rv" || "motorcycle"


    // Modal Show/Hide States
    const [modalShow, setModalShow] = React.useState(false);



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
                    // vehicleData,
                    // setVehicleData,
                    navType,
                    setNavType,
                    accordionHelper,
                    setAccordionHelper,
                    selectValue,
                    setSelectValue,
                    modalShow,
                    setModalShow

                }}
            >
                {children}
            </DriverKickContext.Provider>
        </DriverKickRouter>
    );
}
