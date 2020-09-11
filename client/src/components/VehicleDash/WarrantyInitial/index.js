import React from 'react';
import "./style.css";


function WarrantyInitial({ warrantyModal }) {
    return (
        <div className="g__vehicle-card__body-container g__vehicle-card--top-border">
            <button className="g__vehicle-card__btn" onClick={warrantyModal}>Add New Warranty</button>
        </div>
    );
}

export default WarrantyInitial;