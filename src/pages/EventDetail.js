import React, { Component } from "react";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faExclamationCircle,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  EventClass,
  DetailsList,
  ParagraphText,
  MediumImageHero,
  CollapsibleText,
} from "../pattern/Elements";
import TopmarqMaps from "../pattern/TopmarqMaps";
import { GrayCard } from "../pattern/Cards";
import Footer from "../components/Footer";
import { Button } from "../pattern/forms/Button";

const eventClassPosts = [
  {
    name: "Dennis Han",
    image: "images/groups-Cars.jpg",
    profilePic: "images/profPic.png",
    userID: "342343",
    gold: 43,
    silver: 24,
    bronze: 13,
  },
  {
    name: "Steve Johnson",
    image: "images/bigTruck.jpg",
    profilePic: "images/profPic.png",
    userID: "342343",
    gold: 0,
    silver: 22,
    bronze: 16,
  },
  {
    name: "Shane Riley",
    image: "images/jeep.jpg",
    profilePic: "images/profPic.png",
    userID: "342343",
    gold: 26,
    silver: 0,
    bronze: 11,
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

const marginRightContent = (
  <div>
    <ParagraphText
      icon={
        <FontAwesomeIcon size="lg" color="#606670" icon={faExclamationCircle} />
      }
      heading="Event Rules"
      bodyText={
        <div>
          <p>
            `Due to other group events being held in the Parking lot at Grace
            Community Church, the Clear Lake Cars and Coffee meet for August 8th
            will be held at the Detail Garage location in South Houston.
          </p>
          <p>
            Hope to see you all there and PLEASE respect the property and Mask
            Rules that are in effect.  THANK YOU ALL!!
          </p>
        </div>
      }
      gap={30}
    />
    <ParagraphText
      bodyText={
        <div>
          <p>
            Detail Garage South Houston
            <br />
            12503 Gulf Freeway
            <br />
            Houston TX 77034
          </p>
        </div>
      }
      heading="Location"
      icon={<FontAwesomeIcon size="lg" color="#606670" icon={faMapMarkerAlt} />}
      gap={5}
    />
  </div>
);

class EventDetail extends Component {
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
              <h2>Details</h2>
              <GrayCard
                text="Topmarq's debut classic car show focused on your favorite
automotive classics. With 3 classes we all know and love and a
fourth trying something new, there’s something for any
petrolhead."
                gap={25}
                fullwidth
              />
              <DetailsList
                date="Aug 8 - Aug 15"
                attending={23}
                location="Houston, TX"
                classes={3}
                virtual={true}
                inPerson={true}
                link={"Topmarq"}
                gap={25}
              />

              <div className="level2-content">{marginRightContent}</div>
            </div>
            <div className="column-maincontent-nopadding">
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
                  <FontAwesomeIcon
                    size="s"
                    color="#FFFFFF"
                    icon={faCalendarAlt}
                  />
                }
              />
              <div className="level1-content">
                <CollapsibleText
                  open={false}
                  gap={20}
                  speedInSeconds={1}
                  fullwidth
                  label="Event Details"
                  content={
                    <>
                      <GrayCard
                        gap={15}
                        fullwidth
                        text="Topmarq's debut classic car show focused on your favorite automotive classics. With 3 classes we all know and love and a fourth trying something new, there’s something for any petrolhead."
                      />
                      <div className="card">
                        <DetailsList
                          date="Aug 8 - Aug 15"
                          attending={23}
                          location="Houston, TX"
                          classes={3}
                          virtual={true}
                          inPerson={true}
                          link={"Topmarq"}
                          gap={30}
                          stack={"horizontal"}
                        />
                        {marginRightContent}
                      </div>
                    </>
                  }
                />
              </div>
              <div>
                <h2>Classes</h2>

                <EventClass
                  name="Any and all cars are welcome"
                  nameCharLimit={80}
                  description="This class is for all the cars that participate in this Sunday car meet."
                  descCharLimit={100}
                  data={eventClassPosts}
                  gap={40}
                  submitLabel="View"
                  subscribeLabel="Subscribe"
                  submitButton={this.submitButton}
                  subscribeButton={this.subscribeButton}
                  entries={15}
                  votes={21}
                  views={423}
                  onClick={() => alert("Class Detail Subscribe")}
                  fullwidth
                />
              </div>
              <div>
                <EventClass
                  name="Any and all cars are welcome"
                  nameCharLimit={80}
                  description="This class is for all the cars that participate in this Sunday car meet."
                  descCharLimit={100}
                  data={eventClassPosts}
                  gap={40}
                  submitLabel="View"
                  subscribeLabel="Subscribe"
                  submitButton={this.submitButton}
                  subscribeButton={this.subscribeButton}
                  entries={12}
                  votes={15}
                  views={523}
                  onClick={() => alert("Class Detail Subscribe")}
                  fullwidth
                />
              </div>
            </div>
            <div className="margin-right">
              <div className="level3-content">{marginRightContent}</div>
              <TopmarqMaps address="12503 Gulf Freeway Houston TX 77034" />
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

export default EventDetail;
