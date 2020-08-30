import React, { Component } from "react";
import { Button } from "../pattern/forms/Button";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { withRouter } from "react-router-dom";
const priceSwitcherActive = {
  fontStyle: "italic",
  fontWeight: 900,
  color: "#FFFFFF",
  textDecoration: "underline",
};
const priceSwitcherInactive = {
  /*   fontStyle: "italic",
  fontWeight: 700, */
};

const benefits = {
  admirer: [
    "3 Free* events per month",
    "Join Groups",
    "Post to Forum and Threads",
    "Vote / comment on event entries",
    "Personal Profile",
  ],
  enthusiast: [
    "Unlimited Free* Events",
    "Join Groups",
    "Post to Forum and Threads",
    "Vote / comment on event entries",
    "Personal Profile",
    "Enter your vehicle into events",
    "Create Free* Events",
  ],
  enterprise: [
    "All Features of Enthusiast Plan",
    "Create Group for Organization",
    "Non-member show access",
    "Sponsored highlight showcase",
    "Charge attendee entry fee",
    "Charge vehicle entry fee",
    "Restrict entries to events",
  ],
};

class Upgrade extends Component {
  state = {
    signup: true,
    priceSwitcher1: priceSwitcherActive,
    howlong: 1,
  };
  sendSearch = () => {
    alert("searched");
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  priceSwitch = (val) => {
    if (val === 1) {
      this.setState({
        priceSwitcher1: priceSwitcherActive,
        priceSwitcher2: priceSwitcherInactive,
        howlong: 1,
      });
    } else {
      this.setState({
        priceSwitcher2: priceSwitcherActive,
        priceSwitcher1: priceSwitcherInactive,
        howlong: 2,
      });
    }
  };
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div className="pageHolderHero">
          <div className="heroHolder heroHolderUpgrade">
            <div className="heroPage">
              <div className="heroContent">
                <div className="heroContentHeader">
                  <h1>
                    Easily Host Virtual
                    <br />
                    or In-Person Car Shows
                  </h1>
                  <img src="/images/divider.svg" />
                  <h2>
                    Bringing together the best of the traditional car forum,
                    virtual car shows, and social media in a car community like
                    no other.
                  </h2>
                </div>
              </div>
            </div>
            <div className="largeCardHolder">
              <div className="card">
                <div className="upgradeHolder">
                  <div className="upgradeHero">
                    <div id="col">
                      <h1>Admirer</h1>
                      <div id="price">$0</div>
                      <div id="annual"></div>
                      <div id="howlong">forever</div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Get started"
                          submitting={false}
                          fullwidth={false}
                          color="white"
                          disabled={false}
                          borderRadius={13}
                          onClick={this.handleSubmit}
                          gradient={["#3778DC", "#3778DC"]}
                          gap="10px"
                        />
                      </div>
                    </div>
                    <div id="col">
                      <div className="badgeHolder">
                        <img src="images/badgeGold.png" />
                      </div>
                      <h1>Enthusiast</h1>
                      <div id="price">
                        {this.state.howlong == 1 ? "$2.50" : "$2.99"}
                      </div>
                      <div id="annual">
                        {this.state.howlong == 1
                          ? "* Pay $30 anually"
                          : "* Pay $35 anually"}
                      </div>
                      <div id="howlong">
                        <span
                          id="annually"
                          style={this.state.priceSwitcher1}
                          onClick={() => this.priceSwitch(1)}
                        >
                          annually
                        </span>
                        <span
                          id="monthly"
                          style={this.state.priceSwitcher2}
                          onClick={() => this.priceSwitch(2)}
                        >
                          monthly
                        </span>
                      </div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Upgrade"
                          submitting={false}
                          fullwidth={false}
                          color="white"
                          disabled={false}
                          borderRadius={13}
                          onClick={this.handleSubmit}
                          gradient={["#0141A3", "#0141A3"]}
                          gap="10px"
                        />
                      </div>
                    </div>
                    <div id="col">
                      <div className="badgeHolder">
                        <img src="images/badgeBlack.png" />
                      </div>
                      <h1>Enterprise</h1>
                      <div id="price"></div>
                      <div id="annual">
                        Custom designed show with dedicated support
                      </div>
                      <div id="howlong"></div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Contact us"
                          submitting={false}
                          fullwidth={false}
                          color="white"
                          disabled={false}
                          borderRadius={13}
                          onClick={this.handleSubmit}
                          gradient={["#022356", "#022356"]}
                          gap="10px"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="upgradeHeroCap">Features</div>
                  <div className="upgradeTable">
                    <div className="upgradeList">
                      {benefits.admirer.map((val, i) => {
                        return <div key={i}>{val}</div>;
                      })}
                    </div>
                    <div id="separator"></div>
                    <div className="upgradeList">
                      {benefits.enthusiast.map((val, i) => {
                        return <div key={i}>{val}</div>;
                      })}
                    </div>
                    <div id="separator"></div>
                    <div className="upgradeList">
                      {benefits.enterprise.map((val, i) => {
                        return <div key={i}>{val}</div>;
                      })}
                    </div>
                  </div>
                  <div className="upgradeFloor">
                    <div style={{ width: "100%" }}>
                      <Button
                        label="Get started"
                        submitting={false}
                        fullwidth={false}
                        color="white"
                        disabled={false}
                        borderRadius={13}
                        onClick={this.handleSubmit}
                        gradient={["#3778DC", "#3778DC"]}
                        gap="10px"
                      />
                    </div>
                    <div id="separator"></div>
                    <div style={{ width: "100%" }}>
                      <Button
                        label="Upgrade"
                        submitting={false}
                        fullwidth={false}
                        color="white"
                        disabled={false}
                        borderRadius={13}
                        onClick={this.handleSubmit}
                        gradient={["#0141A3", "#0141A3"]}
                        gap="10px"
                      />
                    </div>
                    <div id="separator"></div>
                    <div style={{ width: "100%" }}>
                      <Button
                        label="Contact us"
                        submitting={false}
                        fullwidth={false}
                        color="white"
                        disabled={false}
                        borderRadius={13}
                        onClick={this.handleSubmit}
                        gradient={["#022356", "#022356"]}
                        gap="10px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Upgrade;
