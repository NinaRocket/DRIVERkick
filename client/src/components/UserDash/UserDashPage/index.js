import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../../GlobalNavBar';
import UserMainWrapper from '../UserMainWrapper';
import UserVehicleCard from '../UserVehicleCard';
import carIcons from "../../../utils/carIcons.json";
import API from "../../../utils/API";




function UserDashPage() {

    const { setNavType, userData, logout, selectValue } = useDriverKickContext();

    // Controls which buttons in the nav bar to use 
    setNavType("userDash");

    // Stores vehicle info from the database
    const [vehicleInfo, setVehicleInfo] = useState([]);

    // Stores vehicle icon from the Switch 
    const [iconImage, setIconImage] = useState({});

    //redirect to vehicle dashboard
    const redirect = useHistory();

    // API Call to Database 
    useEffect(() => {
        API.getVehicles()
            .then((res) => {

                // Validates if the user is signed in
                if (res.data.isAuthenticated === false) {
                    return logout(redirect);
                }

                // const deepCopy = Object.assign([], res.data)
                 // setVehicleInfo(deepCopy);

                // THIS WORKS
                setVehicleInfo(res.data[0]);


            })
            .catch((err) => console.log(err));
    }, []);
    console.log("vehicleInfo")
    console.log(vehicleInfo)
    // START Switch for Car Icons ———————————————|
    useEffect(() => {
        switch (selectValue) {
            case "convertible":
                setIconImage(carIcons[0].image);
                break;
            case "miniVan":
                setIconImage(carIcons[1].image);
                break;
            case "motorcycle":
                setIconImage(carIcons[2].image);
                break;
            case "pickup":
                setIconImage(carIcons[3].image);
                break;
            case "rv":
                setIconImage(carIcons[4].image);
                break;
            case "sedan":
                setIconImage(carIcons[5].image);
                break;
            case "sportsCar":
                setIconImage(carIcons[6].image);
                break;
            case "suv":
                setIconImage(carIcons[7].image);
                break;
            case "van":
                setIconImage(carIcons[8].image);
                break;
            default:
                setIconImage(carIcons[5].image);
        }
    }, []);
    // END Switch for Car Icons ———————————————|

    return (
        <section>
            <GlobalNavBar />
            <UserMainWrapper>
                {/* {vehicleInfo.map(v => (
                    <UserVehicleCard
                        key={v._id}
                        vehicleIcon={v.iconImage}
                        vehicleMake={v.vehicleInfo.make}
                        vehicleYear={v.vehicleInfo.year}
                        vehicleModel={v.vehicleInfo.model}
                    />
                ))} */}

                <UserVehicleCard
                    vehicleIcon={iconImage}
                    vehicleMake={vehicleInfo.make}
                    vehicleYear={vehicleInfo.year}
                    vehicleModel={vehicleInfo.model}
                />


            </UserMainWrapper>
        </section>
    );
}

export default UserDashPage;