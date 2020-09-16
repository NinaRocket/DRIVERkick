import React, { useEffect, useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import VehicleDashCardHeader from "../VehicleDashCardHeader";
import WarrantyInitial from "../WarrantyInitial";
import WarrantyPopulated from "../WarrantyPopulated";
import VehicleWarrantyForm from "../VehicleWarrantyForm";
import VehicleWarrantyIcon from "../../../images/vehiclepage/vehicle-warranty-icon.svg";
import API from "../../../utils/API";
import Modal from "react-bootstrap/Modal";
import { useDriverKickContext } from "../../../utils/DriverKickContext";

// Component For Warranty Modal ===============|
function WarrantyModal(props) {
  const {
    setModalFormSubmit,
    logout,
    vehID,
    setVehID,
  } = useDriverKickContext();


  // START Form Field ————————————————————|

  // States
  const [title, setWarrantyTitle] = useState();
  const [provider, setWarrantyProvider] = useState();
  const [details, setWarrantyDetails] = useState();
  const [warrantyError, setWarrantyError] = useState(false);

  //redirect to vehicle dashboard
  const history = useHistory();

  // Sets input values into State
  const addWarrantyTitle = (event) => {
    setWarrantyTitle(event.target.value);
  };

  const addWarrantyProvider = (event) => {
    setWarrantyProvider(event.target.value);
  };

  const addWarrantyDetails = (event) => {
    setWarrantyDetails(event.target.value);
  };

  setVehID(vehID);


  // Submit Warranty Form Function
  const submitWarrantyForm = (event) => {
    event.preventDefault();
    if (!title || !provider || !details) {
      return setWarrantyError(true);
    }

    // Lets other components know to close the modal
    setModalFormSubmit(true);


    // adding warranty info from above structure
    API.createWarranty(vehID, title, provider, details)
      .then((response) => {
        if (response.data.isAuthenticated === false) {
          return logout(history);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // Re-runs GET to populate any new content
    props.runWarranty();
  };

  // END Form Field  ————————————————————|

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <div className="g__form-container g__remove-margin-bottom">
        <h2 className="text-center">Warranty</h2>
        {warrantyError ? (
          <p className="text-center text-danger">
            Please input your warranty details.
          </p>
        ) : null}

        <VehicleWarrantyForm
          title={title}
          provider={provider}
          details={details}
          addWarrantyTitle={addWarrantyTitle}
          addWarrantyProvider={addWarrantyProvider}
          addWarrantyDetails={addWarrantyDetails}
          submitWarrantyForm={submitWarrantyForm}
        />
      </div>
    </Modal>
  );
}

// Card Component =============================|
function WarrantyCard({ vehicleInfo, getInfo, warranty }) {
  const {
    modalFormSubmit,
    setModalFormSubmit,
    logout
  } = useDriverKickContext();

  const [modalShow, setModalShow] = React.useState(false);

  // Sets up page redirect
  const history = useHistory();


  // Updates global context of if the modal form was submitted
  useEffect(() => {
    if (modalFormSubmit) {
      setModalShow(false);
    }
  }, [modalFormSubmit]);

  // Open and closes modal
  const warrantyModal = () => {
    setModalShow(true);
    setModalFormSubmit(false);
  };

  // Determines if the initial content or populated content component show up.
  const [newUser, setNewUser] = useState(false);

  return (
    <div className="g__vehicle-card">
      <VehicleDashCardHeader
        icon={VehicleWarrantyIcon}
        alt={"Check mark Icon"}
        title={"Warranty"}
        description={
          "Store important third-party warranty details here and stay protected."
        }
      />
      {newUser ? (
        <WarrantyInitial warrantyModal={warrantyModal} />
      ) : (
          <WarrantyPopulated warrantyModal={warrantyModal} warranty={warranty} />
        )}
      <WarrantyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        runWarranty={getInfo}
        vehicleInfo={vehicleInfo}
      />
    </div>
  );
}

export default WarrantyCard;
