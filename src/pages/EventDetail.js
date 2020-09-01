import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/Nav";
import { EventTitleCard } from "../pattern/Cards";
import { EventClass, DetailsList, ParagraphText } from "../pattern/Elements";
import TopmarqMaps from "../pattern/TopmarqMaps";

import { Button } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import Calendar from "react-calendar";
import "../Calendar.css";
import moment from "moment";
const mark = ["8-29-2020", "8-15-2020", "8-03-2020"];

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
          <div className="column-three mainPage">
            <div className="margin-left">
              <EventTitleCard
                groupName={"Clear Lake Cars & Coffee"}
                eventName="August Clear Lake Cars and Coffee Meet"
                image="/images/all_cars2.jpeg"
                gap={18}
              />
              <Button
                label="Attend"
                submitting={false}
                fullwidth={true}
                color="#FFFFFF"
                disabled={false}
                padding={"12px 12px 12px 12px"}
                borderRadius={8}
                /* onClick={} */
                gradient={["#EBAE58", "#EBAE58"]}
                gap={25}
              />
              <h2>Details</h2>
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
                Topmarq's debut classic car show focused on your favorite
                automotive classics. With 3 classes we all know and love and a
                fourth trying something new, there’s something for any
                petrolhead.
              </div>
              <DetailsList
                date="Aug 8 - Aug 15"
                attending={23}
                location="Houston, TX"
                classes={3}
                virtual={true}
                inPerson={true}
                link={"Topmarq"}
              />
            </div>
            <div className="column-maincontent">
              <div>
                <h2>Classes</h2>

                <EventClass
                  name="Any and all cars are welcome"
                  nameLimit={80}
                  description="This class is for all the cars that participate in this Sunday car meet."
                  descriptionLimit={100}
                  data={eventClassPosts}
                  gap={30}
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                  entries={15}
                  votes={21}
                  views={423}
                />
              </div>
              <div>
                <EventClass
                  name="Any and all cars are welcome"
                  nameLimit={80}
                  description="This class is for all the cars that participate in this Sunday car meet."
                  descriptionLimit={100}
                  data={eventClassPosts}
                  gap={30}
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                  entries={12}
                  votes={15}
                  views={523}
                />
              </div>
            </div>

            <div className="margin-right">
              <div>
                <ParagraphText
                  icon={
                    <FontAwesomeIcon
                      size="lg"
                      color="#606670"
                      icon={faExclamationCircle}
                    />
                  }
                  heading="Event Rules"
                  bodyText={
                    <div>
                      <p>
                        `Due to other group events being held in the Parking lot
                        at Grace Community Church, the Clear Lake Cars and
                        Coffee meet for August 8th will be held at the Detail
                        Garage location in South Houston.
                      </p>
                      <p>
                        Hope to see you all there and PLEASE respect the
                        property and Mask Rules that are in effect.  THANK YOU
                        ALL!!
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
                  icon={
                    <FontAwesomeIcon
                      size="lg"
                      color="#606670"
                      icon={faMapMarkerAlt}
                    />
                  }
                  gap={5}
                />

                <TopmarqMaps
                  address="Detail Garage South Houston
12503 Gulf Freeway
Houston TX 77034"
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

export default EventDetail;
