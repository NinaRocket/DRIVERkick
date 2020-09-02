import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import WarrantyForm from "../WarrantyForm";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

function WarrantyCard() {
  const [warranty, setWarranty] = useState({})
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    API.getWarranty()
      .then(res => setWarranty(res.data))
      .catch(err => console.log(err));
      // set initial state to an empty array
  }, [])

  return (
    <div>
      <h1>
        {warranty.title}
      </h1>

      <p>
        {warranty.provider}
      </p>

      <p>
        {warranty.details}
      </p>
      <Button className="warBtn" variant="primary" onClick={handleShow}>
            Add Warranty
          </Button>
    </div>

  )
}

export default WarrantyCard;