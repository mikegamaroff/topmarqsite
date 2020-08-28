import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footerContainer">
          <div id="logo">
            <img src="/images/footerLogo.svg" />
          </div>
          <div>
            Sign in
            <span className="footerNavDivider" />
            About
            <span className="footerNavDivider" />
            Contact us
            <span className="footerNavDivider" />
            Privacy
            <span className="footerNavDivider" />
            Terms
            <span className="footerNavDivider" />
            Sponsor
            <span className="footerNavDivider" />
            Cookies
          </div>
          <div>Topmarq © 2020</div>
        </div>
      </div>
    );
  }
}

export default Footer;
