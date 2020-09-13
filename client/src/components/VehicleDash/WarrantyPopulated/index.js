import React, { useState, useEffect } from 'react';
import "./style.css";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import API from "../../../utils/API";
import openBtnIcon from "../../../images/vehiclepage/open-btn-icon.svg";
import closeBtnIcon from "../../../images/vehiclepage/close-btn-icon.svg";
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDriverKickContext } from "../../../utils/DriverKickContext";



// ACCORDION HELPER COMPONENT ==========================
// controls which warranty opens
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
    // set initial state to empty
    const warrantyTemplate = {
        title: "",
        provider: "",
        details: "",
        date: ""
    }
    // Sets state for warranty
    const [warranty, setWarranty] = useState([]);

    // get Warranties
    // const { id } = useParams();

    // REACT'S SUGGESTED ASYNC USE-EFFECT SYNTAX
    // useEffect(() => {
    //     async function displayWarranty() {
    //         try {
    //             //   const fetchUser = await API.getUser(id);
    //             const fetchWarranty = await API.getWarranty();

    //             //   console.log(fetchWarranty.data);

    //             //   setUserData({ ...userData, ...fetchUser.data });
    //             setWarranty(...fetchWarranty.data[0]);
    //             //   console.log(warranty.title);

    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     displayWarranty()
    // }, []);

     // Context import
  const { userData, setUserData, logout } = useDriverKickContext();

     // Sets up page redirect
  const history = useHistory();

    useEffect(() => {
        API.getWarranty()
        .then((res) => {
          if (res.data.isAuthenticated === false) {
            return logout(history);
          }
          
          setWarranty(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }, []);
  

console.log(warranty[0]);
// console.log(warranty[0].title);

    return (

        <div className="warranty-card__container">
            <Accordion defaultActiveKey="1" >
                {
                    warranty.forEach(element => {
                        console.log(element.title)
                        console.log(element.provider)
                        console.log(element.details)
                        console.log(element.date)
                    })
                } 
                <Card className="g__border-reset">
                    <ContextAwareToggle eventKey="0" accordionHelper={accordionHelper} setAccordionHelper={setAccordionHelper}>
                        <div className="warranty-card__header">
                            {console.log(warranty[0])}
                            <h4>Warranty #1</h4>

                            <FaPlus />

                        </div>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="warranty-card__body" >
                            <div className="warranty-card__meta-container">
                                <h5>{warranty.title}</h5>
                                <h5>provider</h5>
                            </div>
                            <p>
                                details
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

            <button className="g__vehicle-card__btn mt-3" onClick={warrantyModal}>Update Warranty</button>
        </div>



    );
}

export default WarrantyPopulated;