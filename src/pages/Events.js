import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { EventCard } from "../pattern/Cards";
import { UpcomingEvent, GoPremiumBox } from "../pattern/Elements";
import { TextButton } from "../pattern/forms/Button";
import Footer from "../components/Footer";
import Calendar from "react-calendar";
import "../Calendar.css";
import moment from "moment";
const mark = ["8-29-2020", "8-15-2020", "8-03-2020"];
class Events extends Component {
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
                <h2>Upcoming Events</h2>

                <UpcomingEvent
                  name="August Clear Lake Cars and Coffee Meet"
                  nameLimit={80}
                  description="Clear Lake Cars and Coffee"
                  descriptionLimit={100}
                  longDescription="The August edition of the monthly morning cars and coffee get
                together. Car enthusiast from all over Houston are welcome to enjoy
                some breakfast and great cars."
                  image={"images/1969mustang.jpg"}
                  userID={20}
                  gap={30}
                  placeholder="Add Comment"
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                  inPerson={false}
                  virtual={true}
                  classes={3}
                  date={"Aug 8 - Aug 15"}
                  attending={21}
                  place={"Houston, TX"}
                />
              </div>
              <div>
                <UpcomingEvent
                  name="Classic Car Show Virtual Premier"
                  nameLimit={80}
                  description="Topmarq"
                  descriptionLimit={100}
                  longDescription="Topmarq's debut classic car show focused on all your favorite automotive classics. With three classes we all know and love and a fourth trying something new…"
                  image={"images/redWheels.jpg"}
                  userID={20}
                  gap={30}
                  placeholder="Add Comment"
                  submitButton={this.sendSearch}
                  handleChange={this.handleChange}
                  inPerson={true}
                  virtual={false}
                  classes={11}
                  date={"Jul 16 - Aug 14"}
                  attending={52}
                  place={"Dallas, TX"}
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

export default Events;
