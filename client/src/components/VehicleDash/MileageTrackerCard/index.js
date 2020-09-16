import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import mileageTrackerIcon from "../../../images/vehiclepage/vehicle-mileage-icon.svg";
import VehicleDashCardHeader from "../VehicleDashCardHeader";
import MileageTrackerInitial from "../MileageTrackerInitial";
import MileageTrackerPopulated from "../MileageTrackerPopulated";
import MileageTrackerForm from "../MileageTrackerForm";
import Modal from "react-bootstrap/Modal";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import API from "../../../utils/API";

// Current Milage Modal ===========================|
function CurrentMilageModal(props) {
  const {
    setModalFormSubmit,
    vehID,
    logout,
    setVehID

  } = useDriverKickContext();

  // Mileage Form Value State
  const [currentMileage, setCurrentMileage] = useState();

  // Error State
  const [mileageError, setMileageError] = useState(false);

  setVehID(vehID);

  // Sets up page redirect
  const history = useHistory();

  // Sets the form value state
  const handleMilage = (event) => {
    setCurrentMileage(event.target.value);
  };

  // Submits the form value state and validates errors
  const submitCurrentMilage = (event) => {
    event.preventDefault();
    if (!currentMileage) {
      return setMileageError(true);
    }
    API.putMileage(vehID, currentMileage)
      .then((response) => {

        if (response.data.isAuthenticated === false) {
          return logout(history);
        }
        props.getInfo();
      })
      .catch((error) => {
        console.log(error);
      });
    // Lets other components know to close the modal
    setModalFormSubmit(true);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="g__form-container g__remove-margin-bottom">
        <h2 className="text-center">Update Current Mileage</h2>
        {mileageError ? (
          <p className="text-center text-danger">
            Please input your current milage.
          </p>
        ) : null}

        <MileageTrackerForm
          handleMilage={handleMilage}
          submitCurrentMilage={submitCurrentMilage}
        />
      </div>
    </Modal>
  );
}

// Current Tracker Card ===========================|
function MileageTrackerCard({ vehicleInfo, getInfo }) {
  const { modalFormSubmit, setModalFormSubmit, newUserMileage } = useDriverKickContext();
  const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    if (modalFormSubmit) {
      setModalShow(false);
    }
  }, [modalFormSubmit]);

  // Opens and closes modal
  const mileageModal = () => {
    setModalShow(true);
    setModalFormSubmit(false);
  };

  return (
    <div className="g__vehicle-card">
      <VehicleDashCardHeader
        icon={mileageTrackerIcon}
        alt={"Mileage Tracker Icon"}
        title={"Mileage Tracker"}
        description={
          "Frequently updating your mileage generates the most accurate recommendations."
        }
      />


      <MileageTrackerPopulated
        mileageTrackingModal={mileageModal}
        vehicleInfo={vehicleInfo}
      />

      <CurrentMilageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        getInfo={getInfo}
      />

    
    </div>
  );
}

export default MileageTrackerCard;
