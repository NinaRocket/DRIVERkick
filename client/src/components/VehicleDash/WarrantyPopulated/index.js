import React, { useState } from 'react';
import "./style.css";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FaPlus, FaMinus } from 'react-icons/fa';



// ACCORDION HELPER COMPONENT ==========================
function ContextAwareToggle({ children, eventKey, callback, accordionHelper, setAccordionHelper }) {


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


// Warranty COMPONENT ==============================
function WarrantyPopulated({ warrantyModal }) {

    // Sets state for accordion
    const [accordionHelper, setAccordionHelper] = useState(false);

    return (

        <div className="warranty-card__container">
            <Accordion defaultActiveKey="1" >
                <Card className="g__border-reset">
                    <ContextAwareToggle eventKey="0" accordionHelper={accordionHelper} setAccordionHelper={setAccordionHelper}>
                        <div className="warranty-card__header">

                            <h4>Some Headline</h4>

                            <FaPlus />

                        </div>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="warranty-card__body" >
                            <div className="warranty-card__meta-container">
                                <h5>Walmart</h5>
                                <h5>2/21/17</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh etiam libero malesuada vehicula sed justo, tincidunt. In ridiculus magna semper purus. Faucibus morbi feugiat et, ac, luctus quis. Sodales nunc bibendum ut at suspendisse.
                            </p>
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card className="g__border-reset">
                    <ContextAwareToggle eventKey="1" accordionHelper={accordionHelper} setAccordionHelper={setAccordionHelper}>
                        <div className="warranty-card__header">

                            <h4>Some Headline</h4>

                            <FaPlus />

                        </div>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="1">
                        <div className="warranty-card__body" >
                            <div className="warranty-card__meta-container">
                                <h5>Walmart</h5>
                                <h5>2/21/17</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh etiam libero malesuada vehicula sed justo, tincidunt. In ridiculus magna semper purus. Faucibus morbi feugiat et, ac, luctus quis. Sodales nunc bibendum ut at suspendisse.
                            </p>
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card className="g__border-reset">
                    <ContextAwareToggle eventKey="2" accordionHelper={accordionHelper} setAccordionHelper={setAccordionHelper}>
                        <div className="warranty-card__header">

                            <h4>Some Headline</h4>

                            <FaPlus />

                        </div>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="2">
                        <div className="warranty-card__body" >
                            <div className="warranty-card__meta-container">
                                <h5>Walmart</h5>
                                <h5>2/21/17</h5>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh etiam libero malesuada vehicula sed justo, tincidunt. In ridiculus magna semper purus. Faucibus morbi feugiat et, ac, luctus quis. Sodales nunc bibendum ut at suspendisse.
                            </p>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <button className="g__vehicle-card__btn mt-3" onClick={warrantyModal}>Add a Warranty</button>
        </div>



    );
}

export default WarrantyPopulated;