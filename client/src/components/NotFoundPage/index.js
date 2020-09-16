import React, { useEffect } from "react";
import "./style.css";
import { useDriverKickContext } from "../../utils/DriverKickContext";
import GlobalNavBar from "../GlobalNavBar";

function NotFoundPage() {
  const { setNavType } = useDriverKickContext();
  useEffect(() => setNavType("notFound"), []);

  return (
    <div>
      <GlobalNavBar />
      <header className="not-found__hero-bg">
        <h1 className="not-found__h1">404</h1>
        <h3 className="not-found__h2">
          Hmm… Seems like this page could also use some maintenance tracking.
          While, we get on that, please try logging in or signing up again.
        </h3>
      </header>
    </div>
  );
}

export default NotFoundPage;
