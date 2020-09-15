import React from "react";
import "./style.css";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useDriverKickContext } from "../DriverKickContext";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { accordionHelper, setAccordionHelper } = useDriverKickContext();

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {
      callback && callback(eventKey)
      accordionHelper ? setAccordionHelper(false) : setAccordionHelper(true)
    }
  );

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

export default ContextAwareToggle;
