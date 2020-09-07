import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { LatestGroups, GroupsHorizontal } from "../pattern/Cards";
import { LargeImageHero, ThumbnailList } from "../pattern/Elements";

import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";

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
    nameCharLimit: 18,
  },
  {
    name: "sdfsdf & Coffee",
    image: "images/all_cars4.jpeg",
    events: 13,
    members: 22,
    status: "joined",
    nameCharLimit: 18,
  },
  {
    name: "Clear Lake Cars",
    image: "images/all_cars5.jpeg",
    events: 52,
    members: 63,
    status: "pending",
    nameCharLimit: 18,
  },
  {
    name: "Clear Cars &sdf sd fsdfsd  Coffee",
    image: "images/all_cars6.jpeg",
    events: 12,
    members: 74,
    status: "unjoined",
    nameCharLimit: 18,
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
              <div className="align-right">
                <TextButton
                  label={"Create event"}
                  locked={true}
                  gap={15}
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

              {/* /////// CONTENT TO MOVE FROM RIGHT TO LEFT \\\\\\\ */}
              <div className="level2-content">
                {/*    {marginRightContent(this.state.date, this.onChange)} */}
              </div>
            </div>
            <div className="column-maincontent-nopadding">
              {/* /////// CENTER COLUMN \\\\\\\ */}

              <div style={{ marginBottom: "50px" }}>
                <LargeImageHero
                  name="Topmarq Groups"
                  description="New ways to find and join communities"
                  image="/images/classicCars.jpg"
                  gap={25}
                />
                <h2>Latest Groups</h2>
                <div className="mobile-4-column">
                  {latestGroups.map((val, i) => {
                    return (
                      <LatestGroups
                        name={val.name}
                        events={val.events}
                        members={val.members}
                        image={val.image}
                        status={val.status}
                        nameCharLimit={23}
                        fullwidth
                        gap={25}
                      />
                    );
                  })}
                </div>
                <h2>Groups in your area</h2>
                <div className="card">
                  <div className="mobile-2-column">
                    {latestGroups.map((val, i) => {
                      return (
                        <GroupsHorizontal
                          name={val.name}
                          events={val.events}
                          members={val.members}
                          image={val.image}
                          status={val.status}
                          fullwidth
                          nameCharLimit={val.nameCharLimit}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="margin-right">
              {/* /////// RIGHT COLUMN \\\\\\\ */}
              <div className="level3-content">
                {/*             {marginRightContent(this.state.date, this.onChange)} */}
              </div>
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

export default Groups;
