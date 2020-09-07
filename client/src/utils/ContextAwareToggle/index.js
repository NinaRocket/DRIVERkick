import React, { useContext } from "react";
import "./style.css";
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { useDriverKickContext } from "../DriverKickContext";



function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const { accordionHelper, setAccordionHelper } = useDriverKickContext();

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => {
      callback && callback(eventKey)
      accordionHelper ? setAccordionHelper(false) : setAccordionHelper(true)
    }
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className="g__btn-reset"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


export default ContextAwareToggle;
