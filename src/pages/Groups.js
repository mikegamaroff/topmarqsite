import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextButton } from "../pattern/forms/Button";
import { PlusCircle } from "../svg/svgIcons";
import {
  faMapMarkerAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";
import { LatestGroups, GroupsHorizontal } from "../pattern/Cards";
import { EventClass, ThumbnailList, LargeImageHero } from "../pattern/Elements";
import TopmarqMaps from "../pattern/TopmarqMaps";

import { Button } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import "../Calendar.css";
//import moment from "moment";

const latestGroups = [
  // "unjoined" = user hasn't joined a group
  // "joined" = user already joined
  // "pending" = user waiting to be accepted
  {
    name: "Clear Lake Cars & Coffee",
    image: "images/all_cars3.jpeg",
    events: 21,
    members: 12,
    status: "unjoined",
  },
  {
    name: "sdfsdf & Coffee",
    image: "images/all_cars4.jpeg",
    events: 13,
    members: 22,
    status: "joined",
  },
  {
    name: "Clear Lake Cars",
    image: "images/all_cars5.jpeg",
    events: 52,
    members: 63,
    status: "pending",
  },
  {
    name: "Clear Cars &sdf sd fsdfsd  Coffee",
    image: "images/all_cars6.jpeg",
    events: 12,
    members: 74,
    status: "unjoined",
  },
];

const groupData = [
  {
    name: "Clear Lake Cars & Coffee",
    thumbnail: "images/all_cars1.jpeg",
    posts: 12,
  },
  {
    name: "Clear Lake Cars & Coffee",
    thumbnail: "images/all_cars2.jpeg",
    posts: 24,
  },
];

class Groups extends Component {
  state = {
    signup: true,
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
  onChange = (e) => {
    console.log(e);
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
              <div className="align-right">
                <TextButton
                  label={"Create event"}
                  locked={true}
                  icon={<PlusCircle size={15} />}
                />
              </div>
              <div
                className="graycard"
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "12.5px",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                  marginBottom: 25,
                }}
              >
                Join a Group, find enthusiasts in your area, attend events and
                much more…
              </div>
              <h2>Your Groups</h2>
              <ThumbnailList data={groupData} myevents={true} />
            </div>
            <div className="column-maincontent-nopadding">
              <div style={{ marginBottom: "50px" }}>
                <LargeImageHero
                  name="Topmarq Groups"
                  description="New ways to find and join communities"
                  image="/images/classicCars.jpg"
                  gap={25}
                />
                <h2>Latest Groups</h2>
                <div
                  style={{
                    display: "grid",
                    gridGap: "20px",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  }}
                >
                  {latestGroups.map((val, i) => {
                    return (
                      <LatestGroups
                        name={val.name}
                        events={val.events}
                        members={val.members}
                        image={val.image}
                        status={val.status}
                        gap={25}
                      />
                    );
                  })}
                </div>
                <h2>Groups in your area</h2>
                <div className="card">
                  <div
                    style={{
                      display: "grid",
                      gridGap: "40px",
                      gridTemplateColumns: "1fr 1fr",
                    }}
                  >
                    {latestGroups.map((val, i) => {
                      return (
                        <GroupsHorizontal
                          name={val.name}
                          events={val.events}
                          members={val.members}
                          image={val.image}
                          status={val.status}
                        />
                      );
                    })}
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

export default Groups;
