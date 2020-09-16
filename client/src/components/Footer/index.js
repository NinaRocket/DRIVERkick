import React from "react";
import "./style.css";
import LogoTan from "../../images/global/drive-kick-logo-tan.svg";
import ReactGA from 'react-ga';


function Footer() {
  return (

    <footer className="footer">
      <div className="container">
        <div className="row footer_main-content">
          <div className="col-lg-5">
            <h4 className="footer__subhead">Built By</h4>
            <div className="footer__contributors">
              <ReactGA.OutboundLink
                eventLabel="Footer: Lathisha's Github"
                rel="noopener noreferrer"
                to="https://github.com/lnair1997"
                target="_blank"
              >Lathisha Nair</ReactGA.OutboundLink>

              <ReactGA.OutboundLink
                eventLabel="Footer: Linnea's Github"
                rel="noopener noreferrer"
                to="https://github.com/linneagear"
                target="_blank"
              >Linnea Gear</ReactGA.OutboundLink>

              <ReactGA.OutboundLink
                eventLabel="Footer: Gedalyas Github"
                rel="noopener noreferrer"
                to="https://github.com/GedalyaKrycer"
                target="_blank"
              >Gedalya Krycer</ReactGA.OutboundLink>
            </div>
            <div className="footer__contributors">
              <ReactGA.OutboundLink
                eventLabel="Footer: Jacob's Github"
                rel="noopener noreferrer"
                to="https://github.com/jtcravey1991/"
                target="_blank"
              >Jacob Cravey</ReactGA.OutboundLink>
              <ReactGA.OutboundLink
                eventLabel="Footer: Nina's Github"
                rel="noopener noreferrer"
                to="https://github.com/NinaRocket"
                target="_blank"
              >Nina Rocket</ReactGA.OutboundLink>
            </div>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h4 className="footer__subhead footer__os">Open Source</h4>
            <p>You can find out more details about this site in our <ReactGA.OutboundLink
                eventLabel="Footer: Driver Kick Repo"
                rel="noopener noreferrer"
                to="https://github.com/NinaRocket/DRIVERkick"
                target="_blank"
              > Git Hub Repo</ReactGA.OutboundLink>.</p>
          </div>
        </div>
        <div className="footer__sub-row">
          <img
            src={LogoTan}
            alt="Drive Kick Logo"
            className="footer__logo"
          />
          <p className="footer_copyright">© 2020</p>
        </div>

      </div>
    </footer>


  );
};


export default Footer;
