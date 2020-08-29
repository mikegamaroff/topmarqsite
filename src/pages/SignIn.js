import React, { Component } from "react";
import { Input, Button } from "../pattern/forms/Fields";
import Footer from "../components/Footer";
import "../pattern/pattern.css";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SignIn extends Component {
  state = {
    signup: true,
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="pageHolder">
          <div className="heroHolder">
            <div className="heroPage">
              <div className="heroContent">
                <div className="heroContentHeader">
                  <h1>
                    A community for
                    <br />
                    automotive enthusiasts
                  </h1>
                  <img src="/images/divider.svg" />
                  <h2>
                    Bring Your Car Club Back Together with a Virtual Event.
                  </h2>
                </div>
                <div className="heroContentList">
                  <ul>
                    <li>
                      Create a personalized car show to engage your group
                      members both physically and virtually.
                    </li>
                    <li>
                      Create groups and invite fellow enthusiasts to show off
                      their vehicles.
                    </li>
                    <li>
                      Sit back and enjoy all the great vehicles and conversation
                      you're used to at weekend meetups.
                    </li>
                    <li>
                      Spice it up with fun classes like ‘weekend drives’ or
                      ‘best social distancer’.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="loginHolder">
              <div className="card">
                <div className="loginContent">
                  <div className="loginLogo">
                    <img src="/images/logo_blueTitle.svg" />
                  </div>
                  {this.state.signup ? (
                    <>
                      <div style={{ width: "100%" }}>
                        <Input
                          placeholder="Email"
                          name="email"
                          type="email"
                          color="#545860"
                          width="100%"
                          error={false}
                          validated={false}
                          onChange={this.handleChange}
                          autoComplete="off"
                          gap="10px"
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <Input
                          placeholder="User Name"
                          name="username"
                          type="text"
                          color="#545860"
                          width="100%"
                          error={false}
                          validated={false}
                          onChange={this.handleChange}
                          autoComplete="off"
                          gap="10px"
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <Input
                          placeholder="Password"
                          name="password"
                          type="password"
                          color="#545860"
                          width="100%"
                          error={false}
                          validated={false}
                          onChange={this.handleChange}
                          autoComplete="off"
                          gap="10px"
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Submit"
                          submitting={false}
                          fullwidth={true}
                          color="white"
                          disabled={false}
                          onClick={this.handleSubmit}
                          gradient={["#EBAE58", "#EBAE58"]}
                          gap="10px"
                        />
                      </div>
                      <div>
                        <span
                          id="textLink"
                          onClick={() =>
                            this.setState({ signup: !this.state.signup })
                          }
                        >
                          Login
                        </span>
                      </div>
                      <div className="orDivider">
                        <span>
                          <img src="/images/divider_or.svg" />
                        </span>
                      </div>
                      <div className="googleLogin" style={{ width: "100%" }}>
                        <img src="/images/button_google.svg" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ width: "100%" }}>
                        <Input
                          placeholder="Email"
                          name="email"
                          type="email"
                          color="#545860"
                          width="100%"
                          error={false}
                          validated={false}
                          onChange={this.handleChange}
                          autoComplete="off"
                          gap="10px"
                        />
                      </div>

                      <div style={{ width: "100%" }}>
                        <Input
                          placeholder="Password"
                          name="password"
                          type="password"
                          color="#545860"
                          width="100%"
                          error={false}
                          validated={false}
                          onChange={this.handleChange}
                          autoComplete="off"
                          gap="10px"
                        />
                      </div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Login"
                          submitting={false}
                          fullwidth={true}
                          color="white"
                          disabled={false}
                          onClick={this.handleSubmit}
                          gradient={["#EBAE58", "#EBAE58"]}
                          gap="10px"
                        />
                      </div>

                      <div className="orDivider">
                        <span>
                          <img src="/images/divider_or.svg" />
                        </span>
                      </div>
                      <div style={{ width: "100%" }}>
                        <Button
                          label="Sign up with email"
                          submitting={false}
                          fullwidth={true}
                          color="white"
                          disabled={false}
                          onClick={() =>
                            this.setState({ signup: !this.state.signup })
                          }
                          gradient={["#004196", "#004196"]}
                          gap="10px"
                          icon={<FontAwesomeIcon icon={faEnvelopeSquare} />}
                        />
                      </div>
                      <div className="googleLogin" style={{ width: "100%" }}>
                        <img src="/images/button_google.svg" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignIn;
