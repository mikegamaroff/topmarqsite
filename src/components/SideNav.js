import React, { Component } from "react";
import { TweenLite, Power4 } from "gsap";
import { Trophy } from "../svg/svgIcons";
import {
  faSlidersH,
  faUserCircle,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
let hamburgerOpen = {
  opacity: 1,
  rotation: 0,
  scale: 1,
  display: "inherit",
  ease: Power4.easeOut,
};
let hamburgerClose = {
  rotation: 360,
  opacity: 0,
  scale: 0,
  display: "hidden",
  ease: Power4.easeOut,
};
let navOpen = {
  x: -250,
  display: "inherit",
  ease: Power4.easeOut,
};
let navClose = {
  x: 0,
  display: "hidden",
  ease: Power4.easeOut,
};
class SideNav extends Component {
  state = {
    //units: null
    navOpen: false,
  };

  menuSwitch = (route) => {
    console.log("finished");
  };
  menuHamburger = (route) => {
    //  document.getElementById(id).className = "unitOver";

    /*    TweenLite.fromTo(
      document.getElementById(id),
      0.5,
      { css: { top: -250, autoRound: false } },
      { css: { top: 250, autoRound: false }, ease: Power4.easeOut }
    ); */

    this.state.navOpen
      ? (navOpen = {
          ...navOpen,
          onComplete: this.menuSwitch,
          onCompleteParams: [route],
        })
      : (navOpen.onComplete = "");

    if (this.state.navOpen) {
      TweenLite.to(document.getElementById("overlay"), 0.5, {
        display: "block",
        opacity: 1,
        delay: 0,
        yoyo: true,
        repeat: 1,
      });
    }
    TweenLite.fromTo(
      document.getElementById("hamburger"),
      0.5,
      !this.state.navOpen ? hamburgerOpen : hamburgerClose,
      !this.state.navOpen ? hamburgerClose : hamburgerOpen
    );
    TweenLite.fromTo(
      document.getElementById("closebtn"),
      0.5,
      !this.state.navOpen ? hamburgerClose : hamburgerOpen,
      !this.state.navOpen ? hamburgerOpen : hamburgerClose
    );

    TweenLite.fromTo(
      document.getElementById("sidenav"),
      0.5,
      !this.state.navOpen ? navOpen : navClose,
      !this.state.navOpen ? navClose : navOpen
    );

    this.setState({ navOpen: !this.state.navOpen ? true : false });
  };

  render() {
    return (
      <div>
        <div className="hamburger" onClick={this.menuHamburger}>
          <img id="closebtn" src="/images/closeBtn.svg" alt="Close" />
          <img id="hamburger" src="/images/hamburger.svg" alt="Menu" />
        </div>
        <div className="sideNavContainer" id="sidenav">
          <div className="navFooter">
            <span>• Privacy</span>
            <span>• Terms</span>
            <span>• Cookies</span>
          </div>
          <div className="sideNavButtons">
            <div
              className="sideNavButtonClear"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <img
                style={{ borderRadius: "100%", width: "20px" }}
                src="images/profPic.png"
              />

              <div style={{ marginLeft: "10px" }}> Quinn Osha</div>
            </div>
            <div
              className="sideNavButton"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <FontAwesomeIcon size="s" color="#B8B8B8" icon={faUserCircle} />

              <div style={{ marginLeft: "10px" }}>Profile</div>
            </div>
            <div
              className="sideNavButton"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <Trophy award="silver" id="trophy1" size={15} />
              <div style={{ marginLeft: "10px" }}>Leaderboard</div>
            </div>
            <div
              className="sideNavButton"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <FontAwesomeIcon size="s" color="#B8B8B8" icon={faSlidersH} />
              <div style={{ marginLeft: "10px" }}>Settings</div>
            </div>
            <div
              className="sideNavButton"
              onClick={() => this.menuHamburger("/leaderboard")}
            >
              <FontAwesomeIcon
                size="s"
                color="#B8B8B8"
                icon={faQuestionCircle}
              />
              <div style={{ marginLeft: "10px" }}>Help</div>
            </div>
            <div className="smallNavLinks">
              <span>About</span>
              <span>Contact us</span>
              <span>Sponsor</span>
            </div>
          </div>
        </div>

        <div className="colorOverlay" id="overlay"></div>
      </div>
    );
  }
}

export default SideNav;
