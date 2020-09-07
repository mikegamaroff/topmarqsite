import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { Button } from "../pattern/forms/Button";
import {
  DetailsList,
  ThumbnailList,
  MediumImageHero,
  Post,
} from "../pattern/Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { EventCard } from "../pattern/Cards";
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
              <h2>Past events</h2>
              <ThumbnailList data={groupData} pastevents={true} />
            </div>
            <div className="column-maincontent-nopadding">
              <div style={{ marginBottom: "50px" }}>
                <MediumImageHero
                  name="Clear Lake Cars and Coffee"
                  description="Come and have coffee with cars"
                  image="/images/all_cars5.jpeg"
                  button={true}
                  buttonType="regular"
                  buttonLabel="Attend"
                  gap={25}
                  clock={false}
                  onClick={() => alert("Class Detail Subscribe")}
                  icon={
                    <FontAwesomeIcon size="s" color="#FFFFFF" icon={faUsers} />
                  }
                />
                <div className="level1-content">
                  <div
                    className="align-right"
                    style={{
                      minWidth: "140px",
                    }}
                  >
                    <TextButton
                      label={"Create event"}
                      locked={true}
                      gap={10}
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
                      display: "flex",

                      alignItems: "center",
                    }}
                  >
                    Join a Group, find enthusiasts in your area, attend events
                    and much more…
                  </div>
                </div>
                <div
                  className="card group-detail-card"
                  style={{
                    padding: "30px",
                    display: "grid",
                    gridGap: "60px",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      minWidth: "25vw",
                    }}
                  >
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
                  <div
                    style={{
                      display: "flex",

                      flexDirection: "column",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <h2 style={{ margin: 0 }}>
                        <span style={{ marginRight: "5px" }}>
                          <FontAwesomeIcon
                            size="s"
                            color="#606670"
                            icon={faUsers}
                          />
                        </span>
                        234 Members
                      </h2>
                    </div>
                    <div
                      id="groupMembers"
                      style={{
                        padding: "15px 0 15px 0",
                        display: "flex",
                      }}
                    >
                      {groupMembers.map((val, i) => {
                        return (
                          <div
                            style={{
                              width: "11vw",
                              height: "11vw",
                              maxWidth: "40px",
                              maxHeight: "40px",
                              marginRight: "10px",
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
                  className="classPostThree"
                  style={{
                    display: "grid",
                    gridGap: "20px",
                  }}
                >
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars1.jpeg"
                    gap={25}
                    nameCharLimit={23}
                    descCharLimit={50}
                  />
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars2.jpeg"
                    gap={25}
                    nameCharLimit={23}
                    descCharLimit={50}
                  />
                  <EventCard
                    name="Classic Car Show Virtual"
                    description="All Classics (up to 1974) - Best Background Story"
                    date="Jul 16 - Aug 14"
                    attending={52}
                    image="/images/all_cars4.jpeg"
                    gap={25}
                    nameCharLimit={23}
                    descCharLimit={50}
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
                  open={true}
                  postTitle={"Black charger with cool painted wheels"}
                  postImage={"images/jeep.jpg"}
                  postDescription={
                    "All backed out charger with red/white wall tires that added a really cool accent to the look."
                  }
                  postOwner={"Tom Russo"}
                  clock={true}
                  placeholder="Add Comment"
                  award={"gold"}
                  submitImg="/images/send.svg"
                />
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

export default GroupDetail;
