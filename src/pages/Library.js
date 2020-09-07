import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import {
  PatternPopularThread,
  PatternGrayCard,
  PatternEventCard,
  PatternEventTitleCard,
  PatternGroupShowcase,
  PatternLatestGroups,
  PatternGroupsHorizontal,
  PatternUserInputField,
  PatternGoPremiumBox,
  PatternRibbonElement,
  PatternPost,
  PatternUpcomingEvent,
  PatternUserTrophies,
  PatternEventClassPost,
  PatternEventClass,
  PatternCountdownClock,
  PatternCollapsibleText,
} from "../pattern/componentLibrary";

import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";

class Library extends Component {
  state = {
    selectedPattern: "PatternPopularThread",
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

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div className="pageHolderInside">
          <div className="column-two mainPage">
            <div className="margin-left">
              {/* /////// LEFT CONTENT \\\\\\\ */}
              <h1>Components</h1>
              <h2>Cards</h2>
              <ul className="pattern-list">
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternPopularThread" })
                  }
                >
                  PopularThread
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternGrayCard" })
                  }
                >
                  GrayCard
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternEventCard" })
                  }
                >
                  EventCard
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternEventTitleCard" })
                  }
                >
                  EventTitleCard
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternGroupShowcase" })
                  }
                >
                  GroupShowcase
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternLatestGroups" })
                  }
                >
                  LatestGroups
                </li>
                <li
                  onClick={() =>
                    this.setState({
                      selectedPattern: "PatternGroupsHorizontal",
                    })
                  }
                >
                  GroupsHorizontal
                </li>
              </ul>
              <h2>Elements</h2>
              <ul className="pattern-list">
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternUserInputField" })
                  }
                >
                  UserInputField
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternAddThread" })
                  }
                >
                  AddThread
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternGoPremiumBox" })
                  }
                >
                  GoPremiumBox
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternRibbonElement" })
                  }
                >
                  RibbonElement
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternPost" })
                  }
                >
                  Post
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternUpcomingEvent" })
                  }
                >
                  UpcomingEvent
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternUserTrophies" })
                  }
                >
                  UserTrophies
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternEventClassPost" })
                  }
                >
                  EventClassPost
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternEventClass" })
                  }
                >
                  EventClass
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternCountdownClock" })
                  }
                >
                  CountdownClock
                </li>
                <li
                  onClick={() =>
                    this.setState({ selectedPattern: "PatternCollapsibleText" })
                  }
                >
                  CollapsibleText
                </li>
              </ul>

              {/* /////// CONTENT TO MOVE FROM RIGHT TO LEFT \\\\\\\ */}
              <div className="level2-content">
                {/*    {marginRightContent(this.state.date, this.onChange)} */}
              </div>
            </div>
            <div className="column-maincontent">
              {/* /////// CENTER COLUMN \\\\\\\ */}
              {this.state.selectedPattern === "PatternPopularThread" ? (
                <PatternPopularThread />
              ) : null}
              {this.state.selectedPattern === "PatternGrayCard" ? (
                <PatternGrayCard />
              ) : null}
              {this.state.selectedPattern === "PatternEventCard" ? (
                <PatternEventCard />
              ) : null}
              {this.state.selectedPattern === "PatternEventTitleCard" ? (
                <PatternEventTitleCard />
              ) : null}
              {this.state.selectedPattern === "PatternGroupShowcase" ? (
                <PatternGroupShowcase />
              ) : null}
              {this.state.selectedPattern === "PatternLatestGroups" ? (
                <PatternLatestGroups />
              ) : null}
              {this.state.selectedPattern === "PatternGroupsHorizontal" ? (
                <PatternGroupsHorizontal />
              ) : null}
              {this.state.selectedPattern === "PatternUserInputField" ? (
                <PatternUserInputField />
              ) : null}
              {this.state.selectedPattern === "PatternAddThread" ? (
                <div className="card">
                  <h3 style={{ textDecoration: "underline" }}>
                    {`<`}AddThread{`/>`}
                  </h3>
                  This is the same as{" "}
                  <span
                    className="pattern-link"
                    onClick={() =>
                      this.setState({
                        selectedPattern: "PatternUserInputField",
                      })
                    }
                  >
                    UserInputField
                  </span>{" "}
                  but inside a white box using className="card"
                </div>
              ) : null}
              {this.state.selectedPattern === "PatternGoPremiumBox" ? (
                <PatternGoPremiumBox />
              ) : null}
              {this.state.selectedPattern === "PatternRibbonElement" ? (
                <PatternRibbonElement />
              ) : null}
              {this.state.selectedPattern === "PatternPost" ? (
                <PatternPost />
              ) : null}
              {this.state.selectedPattern === "PatternUpcomingEvent" ? (
                <PatternUpcomingEvent />
              ) : null}
              {this.state.selectedPattern === "PatternUserTrophies" ? (
                <PatternUserTrophies />
              ) : null}
              {this.state.selectedPattern === "PatternEventClassPost" ? (
                <PatternEventClassPost />
              ) : null}
              {this.state.selectedPattern === "PatternEventClass" ? (
                <PatternEventClass />
              ) : null}
              {this.state.selectedPattern === "PatternCountdownClock" ? (
                <PatternCountdownClock />
              ) : null}
              {this.state.selectedPattern === "PatternCollapsibleText" ? (
                <PatternCollapsibleText />
              ) : null}
            </div>
          </div>

          <div className="footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
