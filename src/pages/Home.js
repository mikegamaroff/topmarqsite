import React, { Component } from "react";

class Home extends Component {
  render() {
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
                  <img src="/images/logo_blueTitle.svg" />
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
