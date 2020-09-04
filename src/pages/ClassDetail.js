import React, { Component } from "react";

import Nav from "../components/Nav";
import { EventTitleCard } from "../pattern/Cards";
import { DiscussionBox } from "../pattern/Sections";

import {
  ThumbnailList,
  MediumImageHero,
  Post,
  AddThread,
} from "../pattern/Elements";

import { ChevronBackButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import "../Calendar.css";
//import moment from "moment";

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

const groupData = [
  {
    name: "Clear Lake Cars & Coffee",
    thumbnail: "images/all_cars1.jpeg",

    entries: 14,
  },
  {
    name: "Cars, Trucks, And Bikes Meet",
    thumbnail: "images/all_cars2.jpeg",

    entries: 17,
  },
  {
    name: "Cars, Trucks, And Bikes Meet",
    thumbnail: "images/all_cars2.jpeg",

    entries: 23,
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
              <ChevronBackButton gap={18} label="Back to Events lobby" />

              <EventTitleCard
                groupName={"Clear Lake Cars & Coffee"}
                eventName="August Clear Lake Cars and Coffee Meet"
                image="/images/all_cars2.jpeg"
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
                  name="Clear Lake Cars and Coffee"
                  description="Come and have coffee with cars"
                  image="/images/all_cars5.jpeg"
                  button={true}
                  buttonType="subscribe"
                  buttonLabel="Subscribe"
                  gap={25}
                  onClick={() => alert("Class Detail Subscribe")}
                />
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

export default ClassDetail;
