import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import VehicleDashCardHeader from '../VehicleDashCardHeader';
import WarrantyInitial from '../WarrantyInitial';
import WarrantyPopulated from '../WarrantyPopulated';
import VehicleWarrantyIcon from '../../../images/vehiclepage/vehicle-warranty-icon.svg';
import API from "../../../utils/API";

function WarrantyCard({ warrantyModal }) {
    const [warranty, setWarranty] = useState({});

    // Determines if the initial content or populated content component show up.  
    const [newUser, setNewUser] = useState(true);


    const { id } = useParams();
    useEffect(() => {
        API.getWarranty(warranty)
            .then((res) => setWarranty(res.data))
            .catch((err) => console.log(err));
        console.log(warranty);
    }, []);

    return (
        <div className="g__vehicle-card">
            <VehicleDashCardHeader
                icon={VehicleWarrantyIcon}
                alt={"Check mark Icon"}
                title={"Warranty"}
                description={"Store important third-party warranty details here and stay protected."}
            />
            {newUser ? <WarrantyInitial warrantyModal={warrantyModal} /> : <WarrantyPopulated warrantyModal={warrantyModal} />

            }

        </div>
    );
}

export default WarrantyCard;
