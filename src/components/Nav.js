import React, { Component } from "react";
import { Input } from "../pattern/forms/Fields";
import { Home, Bell, Events, Forum, Groups } from "../svg/svgIcons";
import { NavLink, withRouter } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  state = {
    activeBtn: "button",
  };

  sendSearch = () => {
    alert("searched");
  };

  componentDidMount() {
    const navIcon = document.getElementById(
      "icon_" + this.props.match.path.substring(1)
    );
    const navFloor = document.getElementById(
      "floor_" + this.props.match.path.substring(1)
    );

    if (navIcon && navFloor) {
      navIcon.style.fill = "#e2ac61";
      navFloor.style.backgroundColor = "#e2ac61";
    }

    this.setState({ activeBtn: this.props.match.path.substring(1) }, () => {
      console.log(this.state);
    });
  }
  render() {
    const { match } = this.props;
    console.log(match.path);

    return (
      <div>
        <div className="navContainer">
          <div className="column-three">
            <div id="logo" className="vertical-center">
              <div style={{ padding: "0px 0px 0px 7px" }}>
                <img src="/images/topLogo.svg" />
              </div>
              <div style={{ padding: "0px 20px 0px 10px", width: "100%" }}>
                <Input
                  placeholder="User Name"
                  name="username"
                  type="text"
                  color="#545860"
                  width="100%"
                  height="30px"
                  error={false}
                  validated={false}
                  onChange={this.handleChange}
                  autoComplete="off"
                  gap="10px"
                  icon={
                    <FontAwesomeIcon
                      size="lg"
                      color="#B8B8B8"
                      icon={faSearch}
                    />
                  }
                  submitButton={this.sendSearch}
                  submitImg={"images/send.svg"}
                />
              </div>
            </div>
            <div className="vertical-center navButtons">
              <div id="button">
                <Home id="icon_home" />

                <span className="navButtonBase" id="floor_home" />
              </div>
              <div id="button">
                <Bell id="icon_notifications" />
                <span className="navButtonBase" id="floor_notifications" />
              </div>
              <div id="button">
                <Events id="icon_events" />
                <span className="navButtonBase" id="floor_events" />
              </div>
              <div id="button">
                <Forum id="icon_forum" />
                <span className="navButtonBase" id="floor_forum" />
              </div>
              <div id="button">
                <Groups id="icon_groups" />
                <span className="navButtonBase" id="floor_groups" />
              </div>
            </div>
            <div className="profileMenu vertical-center align-right">
              <div style={{ padding: "0px 7px 0px 0px" }}>
                <img src="/images/profPic.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);