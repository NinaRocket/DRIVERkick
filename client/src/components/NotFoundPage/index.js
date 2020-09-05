import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../../utils/DriverKickContext';
import GlobalNavBar from '../GlobalNavBar';

function NotFoundPage() {
    const { setNavType } = useDriverKickContext();
    setNavType("notFound");
    return (
        <div>
            <GlobalNavBar />
        </div>
    );
}

export default NotFoundPage;