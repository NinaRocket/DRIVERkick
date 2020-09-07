import React from "react";
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <VehicleCurrentMileageForm />
    </Modal>
  );
}



function VehicleDashPage() {
  const { setNavType } = useDriverKickContext();
  setNavType("vehicleDash");

  const [modalShow, setModalShow] = React.useState(false);

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
