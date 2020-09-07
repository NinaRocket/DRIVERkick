import React, { useState } from "react";
import "./style.css";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import GlobalNavBar from "../../GlobalNavBar";
import VehicleMainWrapper from "../VehicleMainWrapper";
import MileageTrackerCard from "../MileageTrackerCard";
import VehicleOilChangeCard from "../VehicleOilChangeCard";
import VehicleWarrantyCard from "../VehicleWarrantyCard";
import VehicleRecallsCard from "../VehicleRecallsCard";
import VehicleCurrentMileageForm from "../VehicleCurrentMileageForm";
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
  const { setModalShow } = useDriverKickContext();

  const [mileage, setMileage] = useState();
  const [mileageError, setMileageError] = useState(false);


  const handleMilage = (event) => {
    setMileage(event.target.value);
  }

  const submitCurrentMilage = (event) => {
    event.preventDefault();
    if (!mileage) {
      return setMileageError(true);
    }
    setModalShow(false)
    // Needs to post this to the database
    console.log(mileage)

  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <div className="g__form-container g__remove-margin-bottom">
        <h2 className="text-center">Update Current Mileage</h2>
        {mileageError ? <p className="text-center text-danger">Please input your current milage.</p> : null}



        <VehicleCurrentMileageForm
          handleMilage={handleMilage}
          submitCurrentMilage={submitCurrentMilage}
        />
      </div>
    </Modal>
  );
}



function VehicleDashPage() {
  const { setNavType, modalShow, setModalShow } = useDriverKickContext();
  setNavType("vehicleDash");



  const mileageModal = () => {
    setModalShow(true)
  };

  return (
    <div>
      {/* Add modal for mileage */}

      <GlobalNavBar />
      <VehicleMainWrapper>
        <MileageTrackerCard mileageTrackingModal={mileageModal} />
        {/* <VehicleOilChangeCard />
                <VehicleWarrantyCard />
                <VehicleRecallsCard /> */}
      </VehicleMainWrapper>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default VehicleDashPage;
