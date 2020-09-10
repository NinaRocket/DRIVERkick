import React from 'react';
import "./style.css";
import { useDriverKickContext } from '../../utils/DriverKickContext';
import GlobalNavBar from '../GlobalNavBar';


function NotFoundPage() {
    const { setNavType } = useDriverKickContext();
    setNavType("notFound");
    return (
        <div>
            <GlobalNavBar />
            <header className="not-found__hero-bg">
                <h1 className="not-found__h1">
                    404
                </h1>
                <h3 className="not-found__h2">Hmm… Seems like this page can use some maintenance tracking. While, we get on that, please try logging or signing up in again.</h3>


            </header>
        </div>
    );
}

export default NotFoundPage;