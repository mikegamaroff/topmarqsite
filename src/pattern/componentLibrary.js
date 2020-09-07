import React from "react";
import { CodeBlock, vs2015 } from "react-code-blocks";
import {
  PopularThread,
  GrayCard,
  EventCard,
  EventTitleCard,
  GroupShowcase,
  LatestGroups,
  GroupsHorizontal,
} from "../pattern/Cards";

import {
  UserInputField,
  GoPremiumBox,
  RibbonElement,
  Post,
  UpcomingEvent,
  UserTrophies,
  EventClassPost,
  EventClass,
  CountdownClock,
  CollapsibleText,
} from "../pattern/Elements";

const patternListTable = {
  display: "grid",
  gridTemplateColumns: "30vw 30vw",
  borderBottom: "solid 1px rgba(102, 102, 102, 0.1)",
  paddingBottom: "15px",
  paddingTop: "25px",
  alignItems: "flex-end",
};

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
export const PatternPopularThread = (props) => {
  return (
    <>
      <PopularThread
        description={"Best Garage Setup"}
        image={"/images/all_cars4.jpeg"}
        profileThumbnail={"images/profPic.png"}
        userID={41234234}
        gap={25}
        width={300}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}PopularThread{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profileThumbnail=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">userID=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<PopularThread
                      description={"Best Garage Setup"}
                      image={"/images/all_cars4.jpeg"}
                      profileThumbnail={"images/profPic.png"}
                      userID={41234234}
                      gap={25}
                      fullwidth
                    />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternGrayCard = (props) => {
  return (
    <>
      <GrayCard
        text="Topmarq's debut classic car show focused on your favorite
automotive classics. With 3 classes we all know and love and a
fourth trying something new, there’s something for any
petrolhead."
        gap={25}
        width={300}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}GrayCard{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<GrayCard
            text="Topmarq's debut classic car show focused on your favorite
automotive classics. With 3 classes we all know and love and a
fourth trying something new, there’s something for any
petrolhead."
            gap={25}
            width={300}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternEventCard = (props) => {
  return (
    <>
      <EventCard
        name="Classic Car Show Virtual"
        description="All Classics (up to 1974) - Best Background Story"
        date="Jul 16 - Aug 14"
        attending={52}
        image="/images/all_cars1.jpeg"
        gap={25}
        width={300}
        nameCharLimit={23}
        descCharLimit={50}
        line={true}
        sponsored={true}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}EventCard{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">date=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">attending=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profileThumbnail=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">height=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">descCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">line=</span>
            <span id="pattern-parameter">Boolean (Line underneath)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">sponsored=</span>
            <span id="pattern-parameter">Boolean (Sponsored text)</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={` <EventCard
            name="Classic Car Show Virtual"
            description="All Classics (up to 1974) - Best Background Story"
            date="Jul 16 - Aug 14"
            attending={52}
            image="/images/all_cars1.jpeg"
            gap={25}
            width={300}
            nameCharLimit={23}
            descCharLimit={50}
            line={true}
            sponsored={true}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternEventTitleCard = (props) => {
  return (
    <>
      <EventTitleCard
        groupName={"Clear Lake Cars & Coffee"}
        eventName="August Clear Lake Cars and Coffee Meet"
        image="/images/all_cars2.jpeg"
        gap={30}
        width={300}
        nameCharLimit={23}
        eventOwnerTitle={true}
        profilePic={"images/profPic.png"}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}EventTitleCard{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">groupName=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">eventName=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">eventOwnerTitle=</span>
            <span id="pattern-parameter">
              Boolean (If the card has the Group owner name and pic)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">groupName=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profilePic=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<EventTitleCard
          groupName={"Clear Lake Cars & Coffee"}
          eventName="August Clear Lake Cars and Coffee Meet"
          image="/images/all_cars2.jpeg"
          gap={30}
          fullwidth
          nameCharLimit={23}
          eventOwnerTitle={true}
          profilePic={"images/profPic.png"}
        />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternGroupShowcase = (props) => {
  return (
    <>
      <GroupShowcase
        name="Mustangs"
        description="Connect with other Mustang lovers and join like-minded groups"
        date="Jul 16 - Aug 14"
        members={52}
        image="/images/jeep.jpg"
        gap={25}
        width={300}
        nameCharLimit={23}
        descCharLimit={67}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}GroupShowcase{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">date=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">members=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">descCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<GroupShowcase
            name="Mustangs"
            description="Connect with other Mustang lovers and join like-minded groups"
            date="Jul 16 - Aug 14"
            members={52}
            image="/images/jeep.jpg"
            gap={25}
            width={300}
            nameCharLimit={23}
            descCharLimit={67}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternLatestGroups = (props) => {
  return (
    <>
      <LatestGroups
        name="Clear Lake Cars and Coffee"
        events={21}
        members={12}
        image="images/all_cars3.jpeg"
        status="unjoined"
        gap={25}
        width={300}
        nameCharLimit={23}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}LatestGroups{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">events=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">members=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">status=</span>
            <span id="pattern-parameter">
              String ("joined", "unjoined", "pending")
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={` <LatestGroups
            name="Clear Lake Cars and Coffee"
            events={21}
            members={12}
            image="images/all_cars3.jpeg"
            status="unjoined"
            gap={25}
            fullwidth
            nameCharLimit={23}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternGroupsHorizontal = (props) => {
  return (
    <>
      <div className="card" style={{ marginBottom: 30, width: 340 }}>
        <GroupsHorizontal
          name="Clear Lake Cars and Coffee"
          events={21}
          members={12}
          image="images/all_cars3.jpeg"
          status="unjoined"
          gap={0}
          width={300}
          nameCharLimit={23}
        />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}GroupsHorizontal{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">events=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">members=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">status=</span>
            <span id="pattern-parameter">
              String ("joined", "unjoined", "pending")
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">
              Integer (Truncate after number of characters)
            </span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<GroupsHorizontal
            name="Clear Lake Cars and Coffee"
            events={21}
            members={12}
            image="images/all_cars3.jpeg"
            status="unjoined"
            gap={25}
            width={300}
            nameCharLimit={23}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternUserInputField = (props) => {
  return (
    <>
      <div className="card" style={{ marginBottom: "35px" }}>
        <UserInputField
          handleChange={() => alert("Field changed")}
          submitButton={() => alert("Clicked")}
          placeholder={"Placeholder goes here"}
          profileThumbnail={"images/profPic.png"}
          buttonType=""
          submitImg={"images/send.svg"}
          width={400}
          gap={0}
        />
      </div>
      <div className="card" style={{ marginBottom: "35px" }}>
        <UserInputField
          handleChange={() => alert("Field changed")}
          submitButton={() => alert("Clicked")}
          placeholder={"Placeholder goes here"}
          profileThumbnail={"images/profPic.png"}
          buttonType="post"
          submitImg={"images/postButton.svg"}
          width={400}
          gap={0}
        />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}UserInputField{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">handleChange=</span>
            <span id="pattern-parameter">Function</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">submitButton=</span>
            <span id="pattern-parameter">Function</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">placeholder=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profileThumbnail=</span>
            <span id="pattern-parameter">String (URL path)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">buttonType=</span>
            <span id="pattern-parameter">
              String ("post" will create more space for the button, anything
              else will show the arrow)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitImg=</span>
            <div id="pattern-parameter">
              <p>
                String (If "submitButton" has a value, this is the image for the
                button.
              </p>
              <span>
                If "buttonType" is "post" it shows{" "}
                <img src="images/postButton.svg" style={{ height: "20px" }} />
                <br />
              </span>
              <span>
                otherwise shows{" "}
                <img src="images/send.svg" style={{ height: "20px" }} />
              </span>
            </div>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<div className="card" style={{ marginBottom: "35px" }}>
          <UserInputField
            handleChange={() => alert("Field changed")}
            submitButton={() => alert("Clicked")}
            placeholder={"Placeholder goes here"}
            profileThumbnail={"images/profPic.png"}
            buttonType=""
            submitImg={"images/send.svg"}
            width={400}
            gap={0}
          />
        </div>
        <div className="card" style={{ marginBottom: "35px" }}>
          <UserInputField
            handleChange={() => alert("Field changed")}
            submitButton={() => alert("Clicked")}
            placeholder={"Placeholder goes here"}
            profileThumbnail={"images/profPic.png"}
            buttonType="post"
            submitImg={"images/postButton.svg"}
            width={400}
            gap={0}
          />
        </div>`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternGoPremiumBox = (props) => {
  return (
    <>
      <GoPremiumBox gap={30} width={300} />

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}GoPremiumBox{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<GoPremiumBox gap={25} />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternRibbonElement = (props) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          width: "50%",
          height: 10,
        }}
      >
        <div
          style={{
            postition: "relative",
            width: 100,
          }}
        >
          <RibbonElement award="gold" id={111} size={40} />
        </div>
        <div
          style={{
            postition: "relative",
            width: 100,
          }}
        >
          <RibbonElement award="silver" id={222} size={40} />
        </div>
        <div
          style={{
            postition: "relative",
            width: 100,
          }}
        >
          <RibbonElement award="bronze" id={333} size={40} />
        </div>
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}RibbonElement{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">award=</span>
            <span id="pattern-parameter">
              String ("gold", "silver", "bronze")
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">id=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">size=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`
          <RibbonElement award="gold" id={111} size={40} />
          <RibbonElement award="silver" id={222} size={40} />
          <RibbonElement award="bronze" id={333} size={40} />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternPost = (props) => {
  return (
    <>
      <Post
        postOwner="Tom Russo"
        profileThumbnail="images/profPic.png"
        userID="2423434"
        open={true}
        postTitle="Mercedes Benz backs into Ferrari 458 Special"
        postImage="images/carCrash.jpg"
        postDescription="Looks like this will be a pretty expensive visit to the car show!!"
        trophies={{ gold: 13, silver: 17, bronze: 10 }}
        placeholder="Add Comment"
        award="gold"
        clock={true}
        handleChange={() => alert("Field changed")}
        submitButton={() => alert("Clicked")}
        submitImg="/images/send.svg"
        gap={35}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}Post{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">postOwner=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profileThumbnail=</span>
            <span id="pattern-parameter">String (URL to image)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">userID=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">open=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">postTitle=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">postImage=</span>
            <span id="pattern-parameter">String (URL to image)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">postDescription=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">trophies=</span>
            <span id="pattern-parameter">
              Object e.g. {`{gold: 13, silver: 17, bronze: 10}`}
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">placeholder=</span>
            <span id="pattern-parameter">String (for comment box) </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">award=</span>
            <span id="pattern-parameter">
              String ("gold", "silver", "bronze"){" "}
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">clock=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">handleChange=</span>
            <span id="pattern-parameter">
              Function (when you type in input box)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitButton=</span>
            <span id="pattern-parameter">Function (when you click button)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitImg=</span>
            <span id="pattern-parameter">
              String (URL to Submit button image)
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<Post
            postOwner="Tom Russo"
            profileThumbnail="images/profPic.png"
            userID="2423434"
            open={true}
            postTitle="Mercedes Benz backs into Ferrari 458 Special"
            postImage="images/carCrash.jpg"
            postDescription="Looks like this will be a pretty expensive visit to the car show!!"
            trophies={ {gold: 13, silver: 17, bronze: 10 }}
            placeholder="Add Comment"
            award="gold"
            clock={true}
            handleChange={() => alert("Field changed")}
            submitButton={() => alert("Clicked")}
            submitImg="/images/send.svg"
            gap={35}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternUpcomingEvent = (props) => {
  return (
    <>
      <UpcomingEvent
        name="August Clear Lake Cars and Coffee Meet"
        nameCharLimit={80}
        description="Clear Lake Cars and Coffee"
        descCharLimit={100}
        longDescription="The August edition of the monthly morning cars and coffee get
together. Car enthusiast from all over Houston are welcome to enjoy
some breakfast and great cars."
        image={"images/1969mustang.jpg"}
        userID={20}
        label="Details"
        submitButton={() => alert("Clicked")}
        inPerson={true}
        virtual={true}
        classes={3}
        date={"Aug 8 - Aug 15"}
        attending={21}
        place={"Houston, TX"}
        gap={30}
        width={500}
      />
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}UpcomingEvent{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">descCharLimit=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">longDescription=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL to image)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">userID=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">inPerson=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">virtual=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">classes=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">date=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">attending=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">place=</span>
            <span id="pattern-parameter">String</span>
          </div>

          <div style={patternListTable}>
            <span id="pattern-name">label=</span>
            <span id="pattern-parameter">String (For button)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitButton=</span>
            <span id="pattern-parameter">Function (when you click button)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">fullwidth=</span>
            <span id="pattern-parameter">Boolean</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={` <UpcomingEvent
            name="August Clear Lake Cars and Coffee Meet"
            nameCharLimit={80}
            description="Clear Lake Cars and Coffee"
            descCharLimit={100}
            longDescription="The August edition of the monthly morning cars and coffee get
            together. Car enthusiast from all over Houston are welcome to enjoy
            some breakfast and great cars."
            image={"images/1969mustang.jpg"}
            userID={20}
            label="Details"
            submitButton={() => alert("Clicked")}
            inPerson={false}
            virtual={true}
            classes={3}
            date={"Aug 8 - Aug 15"}
            attending={21}
            place={"Houston, TX"}
            gap={30}
            fullwidth
            />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternUserTrophies = (props) => {
  return (
    <>
      <div className="card" style={{ marginBottom: "30px" }}>
        <UserTrophies gold={12} silver={17} bronze={24} />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}UserTrophies{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">gold=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">silver=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">bronze=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<UserTrophies
            gold={12}
            silver={17}
            bronze={24}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternEventClassPost = (props) => {
  return (
    <>
      <div className="card" style={{ marginBottom: "30px", width: "300px" }}>
        <EventClassPost
          name="Dennis Han"
          userID="342343"
          gold={43}
          silver={24}
          bronze={13}
          image="images/groups-Cars.jpg"
          profilePic="images/profPic.png"
          id={0}
        />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}EventClassPost{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">userID=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gold=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">silver=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">bronze=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">image=</span>
            <span id="pattern-parameter">String (URL to image)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">profilePic=</span>
            <span id="pattern-parameter">String (URL to image)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">id=</span>
            <span id="pattern-parameter">
              Integer (A loop of three highest ranked giving an id of 0, 1 and
              2, with 1 being "gold", 2 "silver" and 3 "bronze".
            </span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<EventClassPost
            name="Dennis Han"
            userID="342343"
            gold={43}
            silver={24}
            bronze={13}
            image="images/groups-Cars.jpg"
            profilePic="images/profPic.png"
            id={0}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternEventClass = (props) => {
  return (
    <>
      <EventClass
        name="Any and all cars are welcome"
        nameCharLimit={80}
        description="This class is for all the cars that participate in this Sunday car meet."
        descCharLimit={100}
        data={eventClassPosts}
        entries={12}
        votes={15}
        views={523}
        submitLabel="View"
        subscribeLabel="Subscribe"
        submitButton={() => alert("Submit Clicked")}
        subscribeButton={() => alert("Subscribe Clicked")}
        gap={40}
        width={700}
      />

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}EventClass{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">name=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">nameCharLimit=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">description=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">descCharLimit=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">data=</span>
            <span id="pattern-parameter">Object Array (see code)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">entries=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">votes=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">views=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitLabel=</span>
            <span id="pattern-parameter">
              String (Main Button - e.g. "View")
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">subscribeLabel=</span>
            <span id="pattern-parameter">
              String (Main Button - e.g. "Subscribe")
            </span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">submitButton=</span>
            <span id="pattern-parameter">Function</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">subscribeButton=</span>
            <span id="pattern-parameter">Function</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">gap=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">width=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<EventClass
          name="Any and all cars are welcome"
          nameCharLimit={80}
          description="This class is for all the cars that participate in this Sunday car meet."
          descCharLimit={100}
          data={eventClassPosts}
          entries={12}
          votes={15}
          views={523}
          submitLabel="View"
          subscribeLabel="Subscribe"
          submitButton={() => alert("Submit Clicked")}
          subscribeButton={() => alert("Subscribe Clicked")}
          gap={40}
          width={700}
        />



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
            `}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternCountdownClock = (props) => {
  return (
    <>
      <div className="card" style={{ marginBottom: "30px" }}>
        <CountdownClock days={12} hrs={2} mins={44} secs={23} />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}CountdownClock{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">days=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">hrs=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">mins=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">secs=</span>
            <span id="pattern-parameter">Integer</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<CountdownClock
            days={12}
            hrs={2}
            mins={44}
            secs={23}
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};

export const PatternCollapsibleText = (props) => {
  return (
    <>
      <div style={{ marginBottom: "30px" }}>
        <CollapsibleText
          open={false}
          speedInSeconds={1}
          label="Sample Collapsible Text"
          fullwidth
          content={
            <div className="card">
              The August edition of the monthly morning cars and coffee get
              together. Car enthusiast from all over Houston are welcome to
              enjoy some breakfast and great cars.
            </div>
          }
        />
      </div>
      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>
          {`<`}CollapsibleText{`/>`}
        </h3>
        <div /* style={patternListTable} */>
          <div style={patternListTable}>
            <span id="pattern-name">open=</span>
            <span id="pattern-parameter">Boolean (Start open or closed)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">speedInSeconds=</span>
            <span id="pattern-parameter">Integer (Animation speed)</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">label=</span>
            <span id="pattern-parameter">String</span>
          </div>
          <div style={patternListTable}>
            <span id="pattern-name">content=</span>
            <span id="pattern-parameter">JSX (Any JSX works here)</span>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: "30px" }}>
        <h3 style={{ textDecoration: "underline" }}>Code</h3>
        <CodeBlock
          text={`<CollapsibleText
            open={false}
            speedInSeconds={1}
            label="Sample Collapsible Text"
            content={
              <div className="card">
                The August edition of the monthly morning cars and coffee get together.
                Car enthusiast from all over Houston are welcome to enjoy some breakfast
                and great cars.
              </div>
            }
          />`}
          language={"jsx"}
          showLineNumbers={false}
          wrapLines={false}
          theme={vs2015}
        />
      </div>
    </>
  );
};
