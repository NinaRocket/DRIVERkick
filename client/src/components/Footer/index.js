import React from "react";
import "./style.css";
import LogoTan from "../../images/global/drive-kick-logo-tan.svg";



function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer_main-content">
          <div className="col-lg-5">
            <h4 className="footer__subhead">Built By</h4>
            <div className="footer__contributors">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/lnair1997">Lathisha Nair</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/linneagear">Linnea Gear</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/GedalyaKrycer">Gedalya Krycer</a>
            </div>
            <div className="footer__contributors">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/jtcravey1991/">Jacob Cravey</a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/NinaRocket">Nina Rocket</a>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h4 className="footer__subhead footer__os">Open Source</h4>
            <p>You can find out more details about this site in our <a target="_blank" rel="noopener noreferrer" href="https://github.com/NinaRocket/DRIVERkick">Git Hub Repo</a>.</p>
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
