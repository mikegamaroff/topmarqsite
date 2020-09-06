import React, { Component } from "react";
import { Input } from "../pattern/forms/Fields";
import { Button } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import { OrDivider } from "../svg/svgIcons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const signInForm = (
  signup,
  handlechange,
  handlesubmit,
  signInFlip,
  dividerColor
) => {
  return (
    <>
      {signup ? (
        <>
          <div
            style={{
              width: "100%",
            }}
          >
            <Input
              placeholder="Email"
              name="email"
              type="email"
              color="#545860"
              width="100%"
              error={false}
              validated={false}
              onChange={handlechange}
              autoComplete="off"
              gap={15}
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
              onChange={handlechange}
              autoComplete="off"
              gap={15}
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
              onChange={handlechange}
              autoComplete="off"
              gap={15}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Button
              label="Submit"
              submitting={false}
              fullwidth={true}
              color="white"
              disabled={false}
              borderRadius={13}
              onClick={handlesubmit}
              gradient={["#EBAE58", "#EBAE58"]}
              gap={15}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{ color: { dividerColor } }}
              id="textLink"
              onClick={() => signInFlip()}
            >
              Login
            </span>
          </div>
          <div className="orDivider">
            <span>
              <OrDivider color={dividerColor} size={"100%"} />
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
              onChange={handlechange}
              autoComplete="off"
              gap={15}
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
              onChange={handlechange}
              autoComplete="off"
              gap={15}
            />
          </div>
          <div style={{ width: "100%" }}>
            <Button
              label="Login"
              submitting={false}
              fullwidth={true}
              color="white"
              borderRadius={13}
              disabled={false}
              onClick={handlesubmit}
              gradient={["#EBAE58", "#EBAE58"]}
              gap={15}
            />
          </div>

          <div className="orDivider">
            <span>
              <OrDivider color={dividerColor} size={"100%"} />
            </span>
          </div>
          <div style={{ width: "100%" }}>
            <Button
              label="Sign up with email"
              submitting={false}
              fullwidth={true}
              color="white"
              borderRadius={13}
              disabled={false}
              onClick={() => signInFlip()}
              gradient={["#004196", "#004196"]}
              gap={15}
              icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
          </div>
          <div className="googleLogin" style={{ width: "100%" }}>
            <img src="/images/button_google.svg" />
          </div>
        </>
      )}
    </>
  );
};

class SignIn extends Component {
  state = {
    signup: true,
  };

  signInFlip = () => {
    this.setState({ signup: !this.state.signup });
  };

  render() {
    console.log(this.props);
    return (
      <div className="noBottomPadding">
        <div className="heroHolder heroHolderSignin">
          <div className="heroPage">
            <div className="heroContent">
              <div className="heroContentHeader">
                <h1>
                  A community for
                  <br />
                  automotive enthusiasts
                </h1>
                <img src="/images/divider.svg" />
                <h2>Bring Your Car Club Back Together with a Virtual Event.</h2>
              </div>
              <div className="heroContentList mobile-hide">
                <ul>
                  <li>
                    Create a personalized car show to engage your group members
                    both physically and virtually.
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
                    Spice it up with fun classes like ‘weekend drives’ or ‘best
                    social distancer’.
                  </li>
                </ul>
              </div>
              <div className="level1-content">
                <div className="loginContent">
                  <div>
                    {signInForm(
                      this.state.signup,
                      this.handlechange,
                      this.handlesubmit,
                      this.signInFlip,
                      "#DCDCDC"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loginHolder mobile-hide">
            <div className="card">
              <div className="loginContent">
                <div className="loginLogo">
                  <img src="/images/logo_blueTitle.svg" />
                </div>
                <div>
                  {signInForm(
                    this.state.signup,
                    this.handlechange,
                    this.handlesubmit,
                    this.signInFlip,
                    "#A5A5A5"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-hide">
          <Footer />
        </div>
      </div>
    );
  }
}

export default SignIn;
