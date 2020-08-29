import React, { Component } from "react";
import { PlusCircle } from "../svg/svgIcons";
import Nav from "../components/Nav";
import { EventCard } from "../pattern/cards/EventCard";
import { TextButton } from "../pattern/forms/Fields";

class Home extends Component {
  state = {
    signup: true,
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
            <div className="column-maincontent">Middle</div>
            <div className="margin-right">Right column</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
