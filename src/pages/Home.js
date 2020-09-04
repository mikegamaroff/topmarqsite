import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { EventCard, GroupShowcase } from "../pattern/Cards";
import { PopularThreads } from "../pattern/Sections";
import { AddThread, Post, Leaderboard } from "../pattern/Elements";
import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";

const popularThreadList = [
  {
    description: "Best Garage Setup",
    image: "/images/all_cars4.jpeg",
    profileThumbnail: "images/profPic.png",
    userID: 20,
  },
  {
    description: "Random",
    image: "/images/all_cars5.jpeg",
    profileThumbnail: "images/profPic.png",
    userID: 20,
  },
  {
    description: "Best Jeep mods",
    image: "/images/all_cars6.jpeg",
    profileThumbnail: "images/profPic.png",
    userID: 20,
  },
];

const leaderboardData = [
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
  {
    pic: "/images/profPic.png",
    name: "Dennis Han",
    gold: 42,
    silver: 36,
    bronze: 62,
  },
];

class Home extends Component {
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
          <div className="column-three mainPage">
            <div className="margin-left">
              <h2>Active Events</h2>
              <EventCard
                name="Classic Car Show Virtual"
                description="All Classics (up to 1974) - Best Background Story"
                date="Jul 16 - Aug 14"
                attending={52}
                image="/images/all_cars1.jpeg"
                sponsored={true}
                gap={25}
                line={true}
              />
              <div className="align-right">
                <TextButton
                  label={"Create event"}
                  locked={true}
                  icon={<PlusCircle size={15} />}
                />
              </div>

              <EventCard
                name="Exotic Foreign Show Virtual"
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
            <div className="column-maincontent">
              <PopularThreads popularThreadList={popularThreadList} />
              <AddThread
                submitButton={this.sendSearch}
                handleChange={this.handleChange}
                profileThumbnail="images/profPic.png"
                placeholder="Add a thread"
                userID={20}
                gap={25}
                //  buttonType="post"
                submitImg="/images/send.svg"
                gap={25}
              />
              <Post
                profileThumbnail="images/profPic.png"
                userID={20}
                gap={25}
                clock={true}
                placeholder="Add Comment"
                submitButton={this.sendSearch}
                handleChange={this.handleChange}
                open={true}
                postTitle={"Mercedes Benz backs into Ferrari 458 Special"}
                postImage={"images/jeep.jpg"}
                postDescription={
                  "Looks like this will be a pretty expensive visit to the car show!!"
                }
                postOwner={"Tom Russo"}
                clock={true}
                placeholder="Add Comment"
                award={"gold"}
                submitImg="/images/send.svg"
              />
            </div>
            <div className="margin-right">
              <h2>Groups</h2>
              <GroupShowcase
                name="Mustangs"
                description="Connect with other Mustang lovers and join like-minded groups"
                date="Jul 16 - Aug 14"
                attending={52}
                image="/images/jeep.jpg"
                gap={25}
              />
              <h2>Leaderboard</h2>
              <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
              <Leaderboard leaderboardData={leaderboardData} />
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

export default Home;
