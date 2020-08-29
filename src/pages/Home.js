import React, { Component } from "react";
import { Input, Button } from "../pattern/forms/Fields";
import Nav from "../components/Nav";
import "../pattern/pattern.css";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Home extends Component {
  state = {
    signup: true,
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div className="pageHolderInside">
          <div id="column-three">
            <div className="margin-left">Left column</div>
            <div className="column-maincontent">Middle</div>
            <div className="margin-right">Right column</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
