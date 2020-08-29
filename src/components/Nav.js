import React, { Component } from "react";
import { Input } from "../pattern/forms/Fields";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Footer extends Component {
  sendSearch = () => {
    alert("searched");
  };
  render() {
    return (
      <div>
        <div className="navContainer">
          <div id="column-three">
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
            <div className="vertical-center">Other stuff</div>
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

export default Footer;
