import React, { useContext, useState } from 'react';
import { Redirect } from "react-router-dom";

const DriverKickContext = React.createContext();


export function useDriverKickContext() {
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
        <Redirect to={{ pathname: "/" }} />
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
        email: "",
        firstName: "",
        lastName: "",
        password: ""
    });

    const [vehicleData, setVehicleData] = useState({
        vehicle: [],
        warranty: []
    });

    return (
        <DriverKickContext.Provider value={{
            login,
            logout,
            setUserData,
            userData,
            authenticated,
            setAuthenticated,
            vehicleData,
            setVehicleData
        }}>
            {children}
        </DriverKickContext.Provider>
    )
}