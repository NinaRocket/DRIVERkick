import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../../utils/API";

function UserNewVehicleForm() {
    const [vinNum, setVinNum] = useState("");
    const [carNickname, setCarNickname] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [currentMileage, setCurrentMileage] = useState();
    const [estOilMileage, setEstOilMileage] = useState();
    const [oilType, setOilType] = useState("");
    const [milesToOil, setMilesToOil] = useState({ value: "choose" });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        setRedirect(true);
    }, []);

    const vinNumValue = (event) => {
        setVinNum(event.target.value);
    };

    const carNicknameValue = (event) => {
        setCarNickname(event.target.value);
    };

    const ownerNameValue = (event) => {
        setOwnerName(event.target.value);
    };

    const currentMileageValue = (event) => {
        setCurrentMileage(event.target.value);
    };

    const estOilMileageValue = (event) => {
        setEstOilMileage(event.target.value);
    };

    const oilTypeValue = (event) => {
        setOilType(event.target.value);
    };

    const milesToOilValue = (event) => {
        setMilesToOil({ value: event.target.value });
    };

    const submitUserVehicle = (event) => {
        event.preventDefault();
        const userVehicleInfo = {
            vinNum,
            carNickname,
            ownerName,
            currentMileage,
            estOilMileage,
            oilType,
            milesToOil
        };

        //request to server to add a new email/password
        // Need to add a way to not submit if the person selects "choose" as the <select> value
        API.addvehicle(userVehicleInfo)
            .then((response) => {
                console.log(response);
                if (!response.data.errmsg) {
                    console.log("successfully added new vehicle");
                    //home for now
                    setRedirect("/stage-user-dashboard");
                } else {
                    console.log("Vehicle did not submit successfully");
                }
            })
            .catch((error) => {
                console.log("Vehicle adding error: ");
                console.log(error);
            });
    };


    return (
        <div className="g__form-container">
            <form className="g__deep-blue--txt">
                <div className="g__label-group">
                    <label className="form-label" htmlFor="vinNumber">Vin Number</label>
                    <input
                        className="form-input"
                        type="text"
                        id="vinNumber"
                        name="vinNumber"
                        placeholder="17 digit code goes here…"
                        value={vinNum}
                        onChange={vinNumValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="carNick">Car Nickname</label>
                    <input
                        className="form-input"
                        type="text"
                        id="carNick"
                        name="carNick"
                        placeholder="i.e. Blue Lightning…"
                        value={carNickname}
                        onChange={carNicknameValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="carOwnerName">Owner Name</label>
                    <input
                        className="form-input"
                        type="text"
                        id="carOwnerName"
                        name="carOwnerName"
                        placeholder="First and/or last name…"
                        value={ownerName}
                        onChange={ownerNameValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="curMileage">
                        Current Mileage
                        </label>
                    <input
                        className="form-input"
                        type="number"
                        placeholder="0"
                        name="curMileage"
                        id="curMileage"
                        value={currentMileage}
                        onChange={currentMileageValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="estOilMileageChange">
                        Estimated Milage at Last Oil Change
                        </label>
                    <input
                        className="form-input"
                        type="number"
                        placeholder="0"
                        name="estOilMileageChange"
                        id="estOilMileageChange"
                        value={estOilMileage}
                        onChange={estOilMileageValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="carOilType">Type of Oil Used</label>
                    <input
                        className="form-input"
                        type="text"
                        id="carOilType"
                        name="carOilType"
                        placeholder="Full, Blend, Conventional, High Mileage…"
                        value={oilType}
                        onChange={oilTypeValue}
                    />
                </div>
                <div className="g__label-group">
                    <label className="form-label" htmlFor="milageToOilChange">Recommended Miles to Oil Change</label>

                    <select id="milageToOilChange" name="milageToOilChange" onChange={milesToOilValue} defaultValue={milesToOil}>
                        <option>Choose…</option>
                        <option value={3000}>3,000</option>
                        <option value={5000}>5,000</option>
                        <option value={6000}>6,000</option>

                    </select>


                </div>

                <button className="btn btn-primary" onClick={submitUserVehicle} type="submit"
                >Add Vehicle</button>

            </form>
        </div>
    );
}

export default UserNewVehicleForm;