import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDriverKickContext } from "../../../utils/DriverKickContext";
import Moment from "react-moment";

// ACCORDION HELPER COMPONENT ==========================|
// controls which warranty opens
function ContextAwareToggle({
  children,
  eventKey,
  callback,
  accordionHelper,
  setAccordionHelper,
}) {
  const decoratedOnClick = useAccordionToggle(eventKey, () => {
    callback && callback(eventKey);
    accordionHelper ? setAccordionHelper(false) : setAccordionHelper(true);
  });

  return (
    <button
      type="button"
      className="g__btn-reset g__btn-accordion"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

// Warranty COMPONENT ==============================|
function WarrantyPopulated({ warrantyModal, warranty }) {
  // Sets state for accordion
  const [accordionHelper, setAccordionHelper] = useState(false);

  const renderWarranties = [];
  let warrantyEventKey = 0;

  warranty.forEach((element) => {
    warrantyEventKey++;

    renderWarranties.push(
      <Card className="g__border-reset" key={warrantyEventKey}>
        <ContextAwareToggle
          eventKey={warrantyEventKey.toString()}
          accordionHelper={accordionHelper}
          setAccordionHelper={setAccordionHelper}
        >
          <div className="warranty-card__header warranty-card__toggle">
            <h4> {element.title}</h4>

            <FaPlus className="warranty-card__plus" />
          </div>
        </ContextAwareToggle>
        <Accordion.Collapse eventKey={warrantyEventKey.toString()}>
          <div className="warranty-card__body">
            <div className="warranty-card__meta-container">
              <h5 className="warranty-card__provider">{element.provider}</h5>
              <h5>
                <Moment format="MM/DD/YYYY" date={element.date} />
              </h5>
            </div>
            <p>{element.details}</p>
          </div>
        </Accordion.Collapse>
      </Card>
    );
  });

  return (
    <div className="warranty-card__container">
      <Accordion defaultActiveKey="1">{renderWarranties}</Accordion>

      <button className="g__vehicle-card__btn mt-3" onClick={warrantyModal}>
        Add Warranty
      </button>
    </div>
  );
}

export default WarrantyPopulated;
