import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { EventTitleCard } from "../pattern/Cards";
import { DiscussionBox } from "../pattern/Sections";
import {
  ThumbnailList,
  MediumImageHero,
  Post,
  AddThread,
  CollapsibleText,
} from "../pattern/Elements";
import { ChevronBackButton } from "../pattern/forms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import { faClock, faUsers } from "@fortawesome/free-solid-svg-icons";
import { EventCard } from "../pattern/Cards";

const postData = [
  {
    postTitle: "Mercedes Benz backs into Ferrari 458 Special",
    postDescription:
      "Looks like this will be a pretty expensive visit to the car show!!",
    postOwner: "Tom Russo",
    profileThumbnail: "images/profPic.png",
    postImage: "images/carCrash.jpg",
    userID: 20,
    trophies: { gold: 13, silver: 17, bronze: 10 },
    open: true,
    award: "gold",
  },
  {
    postTitle: "Crazy Dodge Ram with Turqoise and chrome rims",
    postDescription:
      "This truck gets around as I'm pretty sure I've seen it all across Houston and its got really distinct rims.",
    postOwner: "Shane Jenkins",
    profileThumbnail: "images/profPic.png",
    postImage: "images/bigTruck.jpg",
    userID: 21,
    trophies: { gold: 20, silver: 12, bronze: 15 },
    open: true,
    award: "silver",
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

class ClassDetail extends Component {
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
              <ChevronBackButton gap={18} label="Back to Events lobby" />

              <EventTitleCard
                groupName={"Clear Lake Cars & Coffee"}
                eventName="August Clear Lake Cars and Coffee Meet"
                image="/images/all_cars2.jpeg"
                profilePic="images/profPic.png"
                gap={18}
              />
              <h2>Other classes</h2>
              <ThumbnailList data={groupData} gap={10} />
              <h2>General Discussion</h2>
              <DiscussionBox />
            </div>
            <div className="column-maincontent-nopadding">
              <div style={{ marginBottom: "50px" }}>
                <MediumImageHero
                  name="Cars and Coffee American Muscle Cars"
                  description="This class is for all the American muscle cars that attend the C&C in Clear Lake"
                  image="/images/all_cars6.jpeg"
                  button={true}
                  buttonType="subscribe"
                  buttonLabel="Subscribe"
                  gap={25}
                  clock={true}
                  onClick={() => alert("Class Detail Subscribe")}
                />

                <div className="level1-content">
                  <ChevronBackButton gap={18} label="Back to Events lobby" />
                  <CollapsibleText
                    open={false}
                    gap={20}
                    speedInSeconds={1}
                    fullwidth
                    label="General Discussion"
                    content={
                      <div className="card">
                        <DiscussionBox />
                      </div>
                    }
                  />
                </div>
                <AddThread
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                  profileThumbnail="images/profPic.png"
                  placeholder="Create your show entry"
                  userID={20}
                  buttonType="post"
                  submitImg="/images/postButton.svg"
                  gap={25}
                />

                <h2>Posts</h2>
                {postData.map((val, i) => {
                  return (
                    <Post
                      profileThumbnail={val.profileThumbnail}
                      userID={val.userID}
                      gap={35}
                      i={i}
                      open={val.open}
                      postTitle={val.postTitle}
                      postImage={val.postImage}
                      postDescription={val.postDescription}
                      postOwner={val.postOwner}
                      trophies={val.trophies}
                      placeholder="Add Comment"
                      award={val.award}
                      submitButton={this.sendSearch}
                      handleChange={this.handleChange}
                      submitImg="/images/send.svg"
                    />
                  );
                })}

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

export default ClassDetail;
