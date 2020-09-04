import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";

const DriverKickContext = React.createContext();


export const useDriverKickContext = () => {
    return useContext(DriverKickContext);
}

export function DriverKickProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false);

    function login() {
        setAuthenticated(true);
    }

    function logout() {
        setAuthenticated(false);
        // post route to logout session on backend

        // Route them back to the homepage 
        return <Redirect to={{ pathname: "/" }} />;
    }


    // ****START Child Component Set Up**** 
    // (Will remove this comment once set up correctly)

    // *** The setUserData State is imported on the child component 
    //      import { useDriverKickContext } from './DriverContext';

    // *** We deconstruct the state from the context.
    //      const { setUserData } = useDriverKickContext();

    // ** We then use the state to update the value 
    //     setUserData(value)

    // ****END Child Component Set Up**** 


    const [userData, setUserData] = useState({
        make: "N/A",
        model: "N/A",
        year: "N/A"
    });

    const [vehicleData, setVehicleData] = useState({
        vehicle: [],
        warranty: []
    });

    // Nav Bar States
    const [isVehicleFormNav, setIsVehicleFormNav] = useState(false);

    const [isHomeNav, setIsHomeNav] = useState(false);

    const [isLoginNav, setIsLoginNav] = useState(false);

    const [isSignUpNav, setIsSignUpNav] = useState(false);

    const [isUserDashNav, setIsUserDashNav] = useState(false);

    const [isVehicleDashNav, setIsVehicleDashNav] = useState(false);



    return (
        <DriverKickContext.Provider value={{
            login,
            logout,
            setUserData,
            userData,
            authenticated,
            setAuthenticated,
            vehicleData,
            setVehicleData,
            isVehicleFormNav,
            setIsVehicleFormNav,
            isHomeNav,
            setIsHomeNav,
            isLoginNav,
            setIsLoginNav,
            isSignUpNav,
            setIsSignUpNav,
            isUserDashNav,
            setIsUserDashNav,
            isVehicleDashNav,
            setIsVehicleDashNav
        }}>
            {children}
        </DriverKickContext.Provider>
    )
}