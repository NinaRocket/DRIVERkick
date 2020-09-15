import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./style.css";
import vehicleOilChangeIcon from "../../../images/vehiclepage/vehicle-oil-change-icon.svg";
import VehicleDashCardHeader from "../VehicleDashCardHeader";
import OilChangeForm from "../OilChangeForm";
import OilChangePopulated from "../OilChangePopulated";
import Modal from "react-bootstrap/Modal";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import API from "../../../utils/API";

// Oil Change Modal ===========================|
function CurrentOilChangeModal(props) {
  const {
    setModalFormSubmit,
    vehID,
    logout,
    setVehID,
  } = useDriverKickContext();

  // Sets up page redirect
  const history = useHistory();

  // OilType Form Value State
  const [oilType, setOilType] = useState();

  // OilType Form Value State
  const [currentMileageOil, setCurrentMileageOil] = useState();

  // Select Form Value State
  const [selectOilChangeValue, setSelectOilChangeValue] = useState();

  // Error State
  const [oilChangeError, setOilChangeError] = useState(false);

  setVehID(vehID);

  // Sets the form value state
  const addOilType = (event) => {
    setOilType(event.target.value);
  };

  const addCurrentMileage = (event) => {
    setCurrentMileageOil(event.target.value);
  };

  // Submits the form value state and validates errors
  const submitOilChangeForm = (event) => {
    event.preventDefault();

    if (!currentMileageOil || !selectOilChangeValue || !oilType) {
      return setOilChangeError(true);
    }

    API.addOilChange(vehID, currentMileageOil, selectOilChangeValue, oilType)
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
        <h2 className="text-center">Update Oil Change</h2>
        {oilChangeError ? (
          <p className="text-center text-danger">
            Please double check all fields have been filled out.
          </p>
        ) : null}

        <OilChangeForm
          addOilType={addOilType}
          addCurrentMileage={addCurrentMileage}
          selectOilChangeValue={selectOilChangeValue}
          setSelectOilChangeValue={setSelectOilChangeValue}
          submitOilChangeForm={submitOilChangeForm}
        />
      </div>
    </Modal>
  );
}

// Oil Change Card ========================================================|
function OilChangeCard({ oilData, getInfo }) {
  const {
    modalFormSubmit,
    setModalFormSubmit,
    newUserMileage,
  } = useDriverKickContext();

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
        icon={vehicleOilChangeIcon}
        alt={"Oil Canister Icon"}
        title={"Oil Change"}
        description={"After your last oil change setup for the next one."}
      />
      <OilChangePopulated
        oilChangeTrackingModal={mileageModal}
        oilData={oilData}
      />
      <CurrentOilChangeModal
        getInfo={getInfo}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default OilChangeCard;
