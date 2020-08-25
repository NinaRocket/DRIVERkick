import React from "react";
import styled from "styled-components";
import "./style.css"; 
import { Link } from "react-router-dom";



const FooterContainer = styled.footer`
.footer-middle {
  background: var(--mainLightGrey);
}
.nav-link:hover{
color: var(--mainDark);
}
.nav-link{
  color: var(--mainRed);
}

`;

function Footer() {
  return (
    <FooterContainer className="main-footer">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-copyright text-center">© 2020 Copyright:
            <Link className="nav-link"to="/home" > Tisha's Tots</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </FooterContainer>

  );
};


export default Footer;
