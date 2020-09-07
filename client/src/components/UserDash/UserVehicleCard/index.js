import React, { useState, useRef, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import editBtn from "../../../images/user-page/edit-btn.svg";
import saveBtn from "../../../images/user-page/save-btn.svg";
import ContentEditable from "react-contenteditable";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import API from "../../../utils/API";

function UserVehicleCard() {
  const [editing, setEditing] = useState(false);
  const [carNickname, setCarNickname] = useState("Update");
  const [ownerName, setOwnerName] = useState("Update");
  const { userData, setUserData, logout } = useDriverKickContext();
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [make, setMake] = useState([]);
  const { id } = useParams();

  //redirect to vehicle dashboard
  const redirect = useHistory();
  //const ourData = JSON.parse(userInfo);

  useEffect(() => {
    API.getUser()
      .then((res) => {
        console.log(res);
        console.log(res.data.vehicles[0]._id);
        console.log(res.data.vehicles[1].make);
        console.log(res.data.vehicles[0].warranties);

        if (res.data.isAuthenticated === false) {
          return logout(redirect);
        }
        setVehicleInfo(res.data.vehicles);
        setUserInfo(res.data);
        setMake(res.data.vehicles[0].make);
        //setUserInfo({ ...userInfo, ...res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const trackMaintenanceBtn = () => {
    redirect.push("/vehicle-dashboard");
  };

  console.log(vehicleInfo[0]);
  //const vehicleInfo = userInfo.vehicles;
  //const {} = userInfo.vehicles;
  //console.log(vehicleInfo);

  console.log(userInfo);
  console.log(make);

  const inputedCarNickname = useRef(carNickname);
  const inputedOwnerName = useRef(ownerName);

  const handleNicknameChange = (evt) => {
    inputedCarNickname.current = evt.target.value;
  };

  const handleOwnerChange = (evt) => {
    inputedOwnerName.current = evt.target.value;
  };

  const editFields = () => {
    console.log("edit button");
    editing ? setEditing(false) : setEditing(true);
    setCarNickname(inputedCarNickname);
    setOwnerName(inputedOwnerName);
  };
  return (
    <div className="vehicle-card">
      {/* Row */}
      <div className="d-md-flex">
        {/* Image Col */}
        <div className="vehicle-card__img"></div>
        {/* Content Col */}
        <div className="vehicle-card__content">
          {/* Header Row & Bottom-border*/}
          <div className="vehicle-card__header">
            <div>
              <h4 className="g__card__subhead">Car Nickname</h4>
              <h3>
                <ContentEditable
                  html={inputedCarNickname.current}
                  onChange={handleNicknameChange}
                  disabled={!editing ? true : false}
                  className={editing ? "vehicle-card__custom-input" : ""}
                />
              </h3>
            </div>
            <div>
              <button onClick={editFields} className="vehicle-card__edit-btn">
                {!editing ? (
                  <img src={editBtn} alt="Edit button" />
                ) : (
                  <img src={saveBtn} alt="save button" />
                )}
              </button>
              <button
                onClick={trackMaintenanceBtn}
                className="vehicle-card__track-btn"
              >
                Track Maintenance
              </button>
            </div>
          </div>

          {/* Car Specs */}
          <div className="vehicle-card__car-info">
            {/* Col 1 */}
            <div className="vehicle-card__col">
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Make</h4>
                <h3>{userData.make}</h3>
              </div>
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Year</h4>
                <h3>{userData.year}</h3>
              </div>
            </div>
            {/* Col 2 */}
            <div className="vehicle-card__col">
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Owner</h4>
                <h3>
                  <ContentEditable
                    html={inputedOwnerName.current}
                    onChange={handleOwnerChange}
                    disabled={!editing ? true : false}
                    className={editing ? "vehicle-card__custom-input" : ""}
                  />
                </h3>
              </div>
              <div className="vehicle-card__car-item">
                <h4 className="g__card__subhead">Model</h4>
                <h3>{userData.model}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserVehicleCard;
