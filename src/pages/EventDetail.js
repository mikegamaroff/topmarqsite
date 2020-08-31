import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { EventCard } from "../pattern/Cards";
import { EventClass, GoPremiumBox } from "../pattern/Elements";
import { TextButton } from "../pattern/forms/Button";
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
              <GoPremiumBox gap={25} />
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
                  entries={12}
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
                  votes={21}
                  views={423}
                />
              </div>
            </div>

            <div className="margin-right">
              <h2>Event Calendar</h2>

              <div>
                <Calendar
                  onChange={this.onChange}
                  value={this.state.date}
                  tileClassName="content"
                  tileClassName={({ date, view }) => {
                    if (
                      mark.find(
                        (x) =>
                          moment(x).format("MM-DD-YYYY") ===
                          moment(date).format("MM-DD-YYYY")
                      )
                    ) {
                      return "highlight";
                    }
                  }}

                  // date will return every date visible on calendar and view will view type (eg. month)
                  /*  if(){
                      return 'highlight'; // your class name
                     } */
                />
              </div>
              <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
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
