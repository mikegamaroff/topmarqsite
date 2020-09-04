import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextButton } from "../pattern/forms/Button";
import { PlusCircle } from "../svg/svgIcons";
import {
  faClock,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";
import { EventCard } from "../pattern/Cards";
import {
  DetailsList,
  ThumbnailList,
  LargeImageHero,
  Post,
} from "../pattern/Elements";
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
    enddate: "Aug 18",
    attendees: 412,
  },
  {
    name: "Cars, Trucks, And Bikes Meet",
    thumbnail: "images/all_cars2.jpeg",
    enddate: "Jul 12",
    attendees: 132,
  },
];
const groupMembers = [
  {
    image: "images/profPic.png",
    userID: 1,
  },
  {
    image: "images/profPic.png",
    userID: 1,
  },
  {
    image: "images/profPic.png",
    userID: 1,
  },
  {
    image: "images/profPic.png",
    userID: 1,
  },
  {
    image: "images/profPic.png",
    userID: 1,
  },
];
class GroupDetail extends Component {
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
              <h2>Past events</h2>
              <ThumbnailList data={groupData} pastevents={true} />
            </div>
            <div className="column-maincontent-nopadding">
              <div style={{ marginBottom: "50px" }}>
                <LargeImageHero
                  name="Clear Lake Cars and Coffee"
                  description="Come and have coffee with cars"
                  image="/images/all_cars5.jpeg"
                  button={true}
                  buttonLabel="Join Group"
                  buttonType="regular"
                  gap={25}
                />
                <div
                  className="card"
                  style={{
                    padding: "30px",
                    display: "grid",
                    gridGap: "60px",
                    gridTemplateColumns: "1.7fr 1fr ",
                    marginBottom: "30px",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: "0 0 10px 0",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Car photoshoots are tough - there’s glare, they’re big and
                      bulky, and hard to handle.{" "}
                    </h3>
                    <div
                      style={{
                        margin: "0 0 20px 0",
                        fontSize: "14px",
                        fontWeight: "400",
                        fontStyle: "italic",
                      }}
                    >
                      This group helps point out some things to avoid and some
                      key tips to ensuring that you end up with great shots.
                    </div>
                    <Button
                      label="Join Group"
                      submitting={false}
                      fullwidth={false}
                      color="#FFFFFF"
                      disabled={false}
                      padding={"8px 17px 8px 17px"}
                      borderRadius={8}
                      /* onClick={} */
                      gradient={["#EBAE58", "#EBAE58"]}
                    />
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2 style={{ margin: 0 }}>Members</h2>
                      <div style={{}}>
                        <span style={{ marginRight: "5px" }}>
                          <FontAwesomeIcon
                            size="xs"
                            color="#606670"
                            icon={faClock}
                          />
                        </span>
                        <span style={{ fontSize: "13px", color: "#66696C" }}>
                          312
                        </span>
                      </div>
                    </div>
                    <div
                      id="groupMembers"
                      style={{
                        padding: "15px 0 15px 0",
                        display: "grid",
                        gridGap: "10px",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
                      }}
                    >
                      {groupMembers.map((val, i) => {
                        return (
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              background: `url("${val.image}") no-repeat center center`,
                              backgroundSize: "cover",
                              borderRadius: `100%`,
                              border: "solid 2px rgba(102, 102, 102, 0.5)",
                            }}
                          />
                        );
                      })}
                    </div>
                    <div>
                      <DetailsList
                        date="Aug 8 - Aug 15"
                        competitions={3}
                        location="Houston, TX"
                        link={"Web site"}
                      />
                    </div>
                  </div>
                </div>
                <h2>Active events</h2>
                <div
                  style={{
                    display: "grid",
                    gridGap: "20px",
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                >
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars1.jpeg"
                    gap={25}
                  />
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars2.jpeg"
                    gap={25}
                  />
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars4.jpeg"
                    gap={25}
                  />
                </div>
                <h2>Recent Posts</h2>
                <Post
                  profileThumbnail="images/profPic.png"
                  userID={20}
                  gap={25}
                  placeholder="Add Comment"
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                />
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

export default GroupDetail;
