import React, { useState, useEffect } from "react";
import { Input } from "./forms/Fields";
import { Button, SelectButton } from "./forms/Button";
import { TweenLite, Power4 } from "gsap";
import {
  PostUpVote,
  PostComments,
  Trophy,
  Ribbon,
  Logo,
} from "../svg/svgIcons";
import {
  faCalendarAlt,
  faThList,
  faLaptop,
  faClock,
  faUsers,
  faMapMarkerAlt,
  faEye,
  faArrowAltCircleUp,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { InPerson } from "../svg/svgIcons";
import { text_truncate } from "../methods/tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserInputField = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: props.fullwidth ? "100%" : props.width,
          justifyContent: "center",
          verticalAlign: "middle",
          alignItems: "center",
        }}
      >
        <img
          style={{
            borderRadius: "100%",
            margin: "7px",
            height: props.height,
            border: "solid 2px #D2D2D2",
          }}
          src={props.profileThumbnail}
        />

        <div
          style={{
            width: "100%",
          }}
        >
          <Input
            placeholder={props.placeholder}
            name="addThread"
            type="text"
            color="#545860"
            width="100%"
            height={props.height}
            error={false}
            validated={false}
            handleChange={props.handleChange}
            autoComplete="off"
            icon={props.icon}
            buttonType={props.buttonType}
            submitButton={props.submitButton}
            submitImg={props.submitImg}
          />
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </>
  );
};

export const AddThread = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "100%", padding: "5px" }}>
        <UserInputField
          handleChange={props.handleChange}
          submitButton={props.submitButton}
          placeholder={props.placeholder}
          profileThumbnail={props.profileThumbnail}
          buttonType={props.buttonType}
          submitImg={props.submitImg}
          fullwidth
        />
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const GoPremiumBox = (props) => {
  return (
    <div>
      <div
        className="graycard"
        style={{
          width: props.fullwidth ? "100%" : props.width,
          padding: "10px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "#0F4290",
            textAlign: "right",
            lineHeight: "20px",
            textAlign: "right",
            fontStyle: "italic",
            marginBottom: "10px",
            fontWeight: 600,
          }}
        >
          Go Premium Now »
        </div>
        <div
          style={{
            background: "#FFFFFF",
            boxShadow: "inset 0 1px 3px 0 rgba(0,0,0,0.3)",
            borderRadius: "13px",
            padding: "15px",
            fontSize: "12px",
          }}
        >
          <div style={{ position: "absolute", top: "-18px", left: 0 }}>
            <img style={{ width: "70px" }} src="images/badgeGold.png" />
          </div>
          <h3 style={{ margin: 0, fontSize: "13px" }}>
            Enjoy a host of benefits:
          </h3>
          <ul
            style={{
              marginLeft: "-20px",
              marginBottom: 0,
              paddLeft: 0,
              listStyle: `square inside url('data:image/gif;base64,R0lGODlhBQAKAIABAAAAAP///yH5BAEAAAEALAAAAAAFAAoAAAIIjI+ZwKwPUQEAOw==')`,
              listStylePosition: "outside",
              lineHeight: 1.3,
            }}
          >
            <li style={{ margin: "0 0 6px 0" }}>
              attend or create unlimited shows and events
            </li>
            <li style={{ margin: "0 0 6px 0" }}>submit your cars for entry</li>
            <li style={{ margin: "0 0 0px 0" }}>Another benefit</li>
          </ul>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const RibbonElement = (props) => {
  let color = "";
  let place = "";
  if (props.award === "gold") {
    color = "#E9990E";
    place = "1st";
  } else if (props.award === "silver") {
    color = "#8C8C8C";
    place = "2nd";
  } else if (props.award === "bronze") {
    color = "#C56033";
    place = "3rd";
  } else {
    color = "#F11A1A";
    place = "Err";
  }
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          right: 22,
          zIndex: 2,
        }}
      >
        <Ribbon color={color} id={props.id} size={props.size} />
      </div>
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 2,
          right: 20,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 5,
            left: -1,
            width: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3,
            fontSize: "16px",
            letterSpacing: ".2px",
            fontWeight: 900,
            color: "#FFFFFF",
            textShadow: "0 1px 0 rgba(34,26,0,0.50)",
          }}
        >
          {place}
        </div>
        <Ribbon color="#595959" id="ribbonShadow" size={props.size} />
      </div>
    </div>
  );
};
export const Post = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: props.fullwidth ? "100%" : props.width,
          padding: "0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "18px",
            zIndex: 3,
          }}
        >
          <img src="images/optionsDots.svg" />
        </div>
        <div
          style={{
            position: "absolute",
            top: "-10px",
            right: "40px",
            zIndex: 2,
          }}
        >
          <RibbonElement
            award={props.award}
            id={"trophy_" + Math.floor(Math.random() * 100000)}
            size={40}
          />
        </div>

        <div
          id="post-owner"
          style={{
            display: "flex",
            alignItems: "center",

            padding: "15px 15px 0 15px",
          }}
        >
          <div style={{ display: "flex" }}>
            <img
              style={{
                borderRadius: "100%",
                marginRight: "8px",
                height: "35px",
                border: "solid 2px #D2D2D2",
              }}
              src={props.profileThumbnail}
            />
          </div>
          <div>
            <h3 style={{ fontSize: "14px", margin: "0" }}>{props.postOwner}</h3>
            <div>
              {props.trophies ? (
                <UserTrophies
                  gold={props.gold}
                  silver={props.silver}
                  bronze={props.bronze}
                />
              ) : null}
              {props.clock ? (
                <CountdownClock days={15} hrs={6} mins={42} secs={52} />
              ) : null}
            </div>
          </div>
        </div>
        <div style={{ padding: "15px" }}>
          <h3 style={{ fontSize: "16px", margin: "0", color: "#333333" }}>
            {props.postTitle}
          </h3>
          <div style={{ fontSize: "13px", marginTop: "5px", color: "#8A8A8A" }}>
            {props.postDescription}
          </div>
        </div>
        <div
          style={{
            background: `url(${props.postImage}) no-repeat center center`,
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            height: "300px",
          }}
        ></div>
        <div
          style={{
            padding: "15px",
            display: "flex",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <PostComments color="#0155B0" size={23} />
            </span>
            <span>2 comments</span>
          </div>
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <PostUpVote
                color={props.open ? "#13B500" : "#7A0014"}
                size={23}
              />
            </span>
            <span>8 {!props.open ? "(closed)" : null}</span>
          </div>
        </div>
        <div
          style={{
            borderBottom: "solid 1px #D8D8D8",
            margin: "0px 15px 0 15px",
          }}
        ></div>
        <div style={{ padding: "15px 15px 15px 8px" }}>
          <UserInputField
            handleChange={props.handleChange}
            submitButton={props.submitButton}
            placeholder={props.placeholder}
            profileThumbnail={props.profileThumbnail}
            buttonType={props.buttonType}
            submitImg={props.submitImg}
            fullwidth
          />
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const UpcomingEvent = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: props.fullwidth ? "100%" : props.width,
          padding: "0px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "18px",
            zIndex: 3,
          }}
        >
          {/*   <img src="images/optionsDots.svg" /> */}
        </div>
        <div style={{ padding: "15px 15px 0 15px" }}>
          <h1 style={{ fontSize: "16px", margin: 0 }}>
            <span style={{ marginRight: "8px" }}>
              <FontAwesomeIcon size="s" color="#333333" icon={faCalendarAlt} />
            </span>
            {text_truncate(props.name, props.nameCharLimit)}
          </h1>
          <p style={{ fontSize: "12px", opacity: 0.8 }}>
            {text_truncate(props.description, props.descCharLimit)}
          </p>
        </div>
        <div
          style={{
            padding: "10px 15px 10px 15px",
            display: "flex",
            fontSize: "12px",
            fontWeight: 500,
            color: "#333333",
          }}
        >
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#B0B0B0",
              fontweight: 500,
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faClock} />
            </span>
            <span>{props.date}</span>
          </div>
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#B0B0B0",
              fontweight: 500,
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </span>
            <span>{props.attending} Attending</span>
          </div>
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
              color: "#B0B0B0",
              fontweight: 500,
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faMapMarkerAlt} />
            </span>
            <span>{props.place}</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            height: "300px",
            width: "100%",
            fontSize: "13px",
            lineHeight: "1.5",
            paddingBottom: "15px",
            borderTop: "solid 1px #D8D8D8",
            borderBottom: "solid 1px #D8D8D8",
            background: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 50%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",

            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",

              alignItems: "flex-end",
            }}
          >
            <div style={{ marginRight: "30px" }}>{props.longDescription}</div>
            <Button
              label={props.label}
              submitting={false}
              fullwidth={false}
              color="#FFFFFF"
              disabled={false}
              padding={"8px 20px 8px 20px"}
              borderRadius={8}
              onClick={props.submitButton}
              gradient={["#EBAE58", "#EBAE58"]}
              gap={0}
            />
          </div>
        </div>

        <div
          style={{
            padding: "15px",
            display: "flex",
            fontSize: "13px",
            color: "#333333",
          }}
        >
          <div
            style={{
              marginRight: "15px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faThList} />
            </span>
            <span>{props.classes} classes</span>
          </div>
          {props.virtual ? (
            <div
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "5px" }}>
                <FontAwesomeIcon size="s" color="#606670" icon={faLaptop} />
              </span>
              <span>virtual</span>
            </div>
          ) : null}
          {props.inPerson ? (
            <div
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "5px" }}>
                <InPerson color="#606670" size={25} />
              </span>
              <span>In person</span>
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const UserTrophies = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",

        fontSize: "12px",
        paddingTop: "5px",
      }}
    >
      {props.gold ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>
            <Trophy
              award="gold"
              id={"trophy1_" + Math.floor(Math.random() * 100000)}
              size={15}
            />
          </span>
          <span style={{ margin: "0 5px 0 3px" }}>{props.gold}</span>
        </div>
      ) : null}
      {props.silver ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <Trophy
              award="silver"
              id={"trophy2_" + Math.floor(Math.random() * 100000)}
              size={15}
            />
          </span>
          <span style={{ margin: "0 5px 0 3px" }}>{props.silver}</span>
        </div>
      ) : null}
      {props.bronze ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>
            <Trophy
              award="bronze"
              id={"trophy3_" + Math.floor(Math.random() * 100000)}
              size={15}
            />
          </span>
          <span style={{ margin: "0 5px 0 3px" }}>{props.bronze}</span>
        </div>
      ) : null}
    </div>
  );
};

export const EventClassPost = (props) => {
  return (
    <div>
      <div>
        <div
          className="eventClassPostImage"
          style={{
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            width: "100%",
            fontSize: "13px",
            lineHeight: "1.5",
            paddingBottom: "15px",
            borderTop: "solid 1px #D8D8D8",
            borderBottom: "solid 1px #D8D8D8",
            background: `url("${props.image}") no-repeat center center`,
            backgroundSize: "cover",
            position: "relative",
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "10px",
              zIndex: 2,
            }}
          >
            <RibbonElement
              // check
              id={"ribbon_" + Math.floor(Math.random() * 100000)}
              award={
                props.id === 0
                  ? "gold"
                  : props.id === 1
                  ? "silver"
                  : props.id === 2
                  ? "bronze"
                  : false
              }
              size={40}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", padding: "4px", background: "#EFEFEF" }}>
        <div>
          <div className="profilePic" style={{ padding: "0px 7px 0px 0px" }}>
            <img style={{ height: "100%" }} src={props.profilePic} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: "12px", fontWeight: 600 }}>{props.name}</div>
          <UserTrophies
            gold={props.gold}
            silver={props.silver}
            bronze={props.bronze}
          />
        </div>
      </div>
    </div>
  );
};

export const EventClass = (props) => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: props.fullwidth ? "100%" : props.width,
          padding: "0px",
        }}
      >
        <div
          className="classSubscribeButton"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <SelectButton
            label={props.subscribeLabel}
            submitting={false}
            fullwidth={false}
            color="#3E4347"
            disabled={false}
            checked={true}
            padding={"8px 15px 8px 40px"}
            borderRadius={8}
            onClick={props.subscribeButton}
            gradient={["#ECEDF1", "#ECEDF5"]}
          />
        </div>
        <div style={{ padding: "15px 15px 15px 15px" }}>
          <h1 className="shortenedText" style={{ fontSize: "16px", margin: 0 }}>
            {text_truncate(props.name, props.nameCharLimit)}
          </h1>
          <p
            className="shortenedText"
            style={{
              fontSize: "12px",
              opacity: 0.8,
              marginBottom: "3px",
            }}
          >
            {text_truncate(props.description, props.descCharLimit)}
          </p>
          <CountdownClock days={15} hrs={6} mins={42} secs={52} />
        </div>
        <div
          className="classPostThree"
          style={{
            display: "grid",
            width: "100%",

            gridGap: "3px",
          }}
        >
          {props.data &&
            props.data.map((val, i) => {
              return (
                <div key={val.userID}>
                  <EventClassPost
                    name={val.name}
                    userID={val.userID}
                    gold={val.gold}
                    silver={val.silver}
                    bronze={val.bronze}
                    image={val.image}
                    profilePic={val.profilePic}
                    id={i}
                  />
                </div>
              );
            })}
        </div>
        <div
          style={{
            padding: "15px",
            display: "flex",
            fontSize: "13px",
            color: "#333333",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                marginRight: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginRight: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "5px" }}>
                  <FontAwesomeIcon size="s" color="#606670" icon={faEye} />
                </span>
                <span>{props.views} views</span>
              </div>

              <div
                style={{
                  marginRight: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "5px" }}>
                  <FontAwesomeIcon
                    size="s"
                    color="#606670"
                    icon={faArrowAltCircleUp}
                  />
                </span>
                <span>{props.votes} votes</span>
              </div>
            </div>
            <div
              className="shortenedTextMobile"
              style={{
                marginTop: "13px",
                fontStyle: "italic",
                fontSize: "13px",
              }}
            >
              See all {props.entries} entries to Any and all cars are welcome »
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              right: "20px",
            }}
          >
            <Button
              label={props.submitLabel}
              submitting={false}
              fullwidth={false}
              color="#FFFFFF"
              disabled={false}
              padding={"8px 30px 8px 30px"}
              borderRadius={8}
              onClick={props.submitButton}
              gradient={["#EBAE58", "#EBAE58"]}
              gap={0}
            />
          </div>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const CountdownClock = (props) => {
  const style = {
    number: {
      fontSize: "13px",
      color: "#E2AC61",
      letterSpacing: 0,
      fontWeight: 900,
      textAlign: "center",
      margin: "0 2px 0 0px",
    },
    label: {
      fontSize: "11px",
      color: "#939597",
      letterSpacing: 0,
      textAlign: "center",
      margin: "0 6px 0 0px",
    },
    colon: {
      fontSize: "13px",
      color: "#333333",
      letterSpacing: 0,
      textAlign: "center",
      fontWeight: 900,
      margin: "0 6px 0 0px",
    },
  };

  return (
    <div>
      <span style={style.number}>{props.days}</span>
      <span style={style.label}>days</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>{props.hrs}</span>
      <span style={style.label}>hrs</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>{props.mins}</span>
      <span style={style.label}>mins</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>{props.secs}</span>
      <span style={style.label}>secs</span>
    </div>
  );
};

export const Leaderboard = (props) => {
  return (
    <div>
      <div
        style={{
          margin: "15px 0 5px 0",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "auto 12% 12% 12%",
        }}
      >
        <div></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy
            award="gold"
            id={"trophy1_" + Math.floor(Math.random() * 100000)}
            size={20}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy
            award="silver"
            id={"trophy2_" + Math.floor(Math.random() * 100000)}
            size={20}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy
            award="bronze"
            id={"trophy3_" + Math.floor(Math.random() * 100000)}
            size={20}
          />
        </div>
      </div>

      {props.leaderboardData &&
        props.leaderboardData.map((val, i) => {
          return (
            <div
              key={i}
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto 12% 12% 12%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px 5px 5px 0",
                  borderBottom: "solid 1px #F4F4F4",
                }}
              >
                <img
                  src={val.pic}
                  style={{
                    borderRadius: "100%",
                    marginRight: "7px",
                    height: "25px",
                    border: "solid 2px #D2D2D2",
                  }}
                />
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#1D1F23",
                  }}
                >
                  {val.name}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#CA9E0C",
                  background: "rgba(206,162,13,0.17)",

                  margin: "0px 3px 0 3px",
                }}
              >
                {val.gold}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#888888",
                  background: "rgba(163,163,163,0.18)",
                  justifyContent: "center",
                  margin: "0px 3px 0 3px",
                }}
              >
                {val.silver}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "#7C2200",
                  background: "rgba(201,136,76,0.19)",
                  justifyContent: "center",
                  margin: "0px 3px 0 3px",
                }}
              >
                {val.bronze}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export const DetailsList = (props) => {
  const listStyle = {
    marginRight: "6px",
    display: "flex",
    justifyContent: `${props.stack === "horizontal" ? "flex-end" : "center"}`,

    width: "20px",
  };
  const listHolderStyle = {
    display: "flex",
    paddingBottom: props.stack === "horizontal" ? "10px" : "10px",
    alignItems: "center",
    borderRadius: 8,
    marginRight: "12px",
  };
  return (
    <>
      <div
        style={{
          color: "#858789",
          fontSize: "12px",
          fontWeight: "500",
          flexWrap: "wrap",

          display: `${props.stack === "horizontal" ? "flex" : "block"}`,
        }}
      >
        <div style={listHolderStyle}>
          <div style={listStyle}>
            <FontAwesomeIcon size="s" color="#606670" icon={faClock} />
          </div>
          <span>{props.date}</span>
        </div>
        {props.attending ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </div>
            <span>{props.attending} attending</span>
          </div>
        ) : null}
        {props.location ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              <FontAwesomeIcon size="s" color="#606670" icon={faMapMarkerAlt} />
            </div>
            <span>{props.location}</span>
          </div>
        ) : null}
        {props.classes ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              <FontAwesomeIcon size="s" color="#606670" icon={faThList} />
            </div>
            <span>{props.classes} classes</span>
          </div>
        ) : null}
        {props.virtual ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              <FontAwesomeIcon size="s" color="#606670" icon={faLaptop} />
            </div>
            <span>Virtual</span>
          </div>
        ) : null}
        {props.inPerson ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              {/*  <FontAwesomeIcon size="s" color="#606670" icon={faMale} /> */}
              <InPerson color="#606670" size={20} />
            </div>
            <span>In person</span>
          </div>
        ) : null}
        {props.competitions ? (
          <div style={listHolderStyle}>
            <div style={listStyle}>
              {/*  <FontAwesomeIcon size="s" color="#606670" icon={faMale} /> */}
              <Trophy award="silver" id="23984729384" size={15} />
            </div>
            <span>{props.competitions} competitions</span>
          </div>
        ) : null}
        <div style={listHolderStyle}>
          <div style={listStyle}>
            <FontAwesomeIcon
              size="s"
              color="#606670"
              icon={faExternalLinkAlt}
            />
          </div>
          <span>{props.link}</span>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </>
  );
};
export const ParagraphText = (props) => {
  return (
    <div>
      <div>
        <span style={{ marginRight: "4px" }}>{props.icon}</span>
        <span style={{ fontSize: "14px", fontWeight: 900 }}>
          {props.heading}
        </span>
      </div>
      <div
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          lineHeight: 1.5,
          color: "#7B7B7B",
        }}
      >
        {props.bodyText}
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const ThumbnailList = (props) => {
  return (
    <div>
      {props.data.map((val, i) => {
        return (
          <div
            style={{
              display: "flex",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                marginRight: "5px",
              }}
            >
              <img
                style={{
                  height: "50px",
                  borderRadius: "20%",
                }}
                src={val.thumbnail}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                verticalAlign: "middle",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "5px",
                }}
              >
                {val.name}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: props.myevents ? "#0B71F6" : "#66696C",
                }}
              >
                {props.myevents ? <>• {val.posts} new posts</> : null}
                {val.entries ? <>{val.entries} entries</> : null}
                {props.pastevents ? (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        marginRight: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>
                        <FontAwesomeIcon
                          size="s"
                          color="#606670"
                          icon={faClock}
                        />
                      </span>
                      <span>Ended {val.enddate}</span>
                    </div>
                    <div
                      style={{
                        marginRight: "15px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ marginRight: "5px" }}>
                        <FontAwesomeIcon
                          size="s"
                          color="#606670"
                          icon={faUsers}
                        />
                      </span>
                      <span>{val.attendees}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div style={{ height: props.gap }} />
          </div>
        );
      })}

      <div
        style={{
          fontSize: "13px",
          fontStyle: "italic",
          lineHeight: 1.5,
          color: "#7B7B7B",
        }}
      >
        {props.bodyText}
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const LargeImageHero = (props) => {
  return (
    <div>
      <div>
        <div className="card" style={{ height: "400px" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              display: "flex",
              padding: "0px 30px 20px 30px",
              boxSizing: "border-box",
              webkitBoxSizing: "border-box",
              MozBoxSizing: "border-box",
              top: 0,
              width: "100%",
              height: "100%",

              background: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 58%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${props.image}") no-repeat center center`,

              backgroundSize: "cover",
              borderRadius: ` 0 0 13px 13px`,
              color: "white",
              flexDirection: "column",
              justifyContent: `flex-end`,
            }}
          >
            {props.button ? (
              <div style={{ position: "absolute", top: 30, right: 30 }}>
                <Button
                  label={props.buttonLabel}
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
            ) : null}
            <span style={{ marginBottom: "5px" }}>
              <FontAwesomeIcon size="lg" color="#FFFFFF" icon={faUsers} />
            </span>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 900,
                margin: "0 0 4px 0",
                padding: 0,
              }}
            >
              {text_truncate(props.name, 23)}
            </h1>
            <span style={{ fontSize: "15px", lineHeight: 1.5, opacity: 0.8 }}>
              {text_truncate(props.description, 67)}
            </span>
          </div>
        </div>
      </div>
      <div style={{ height: props.gap }} />
    </div>
  );
};

export const MediumImageHero = (props) => {
  return (
    <div>
      <div>
        <div className="card" style={{ height: "250px" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              display: "flex",
              padding: "0px 30px 20px 30px",
              boxSizing: "border-box",
              webkitBoxSizing: "border-box",
              MozBoxSizing: "border-box",
              top: 0,
              width: "100%",
              height: "100%",

              background: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 58%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${props.image}") no-repeat center center`,

              backgroundSize: "cover",
              borderRadius: ` 0 0 13px 13px`,
              color: "white",
              flexDirection: "column",
              justifyContent: `flex-end`,
            }}
          >
            {props.button ? (
              <div style={{ position: "absolute", top: 30, right: 30 }}>
                {props.buttonType === "regular" ? (
                  <Button
                    label={props.buttonLabel}
                    submitting={false}
                    fullwidth={false}
                    color="#FFFFFF"
                    disabled={false}
                    padding={"8px 17px 8px 17px"}
                    borderRadius={8}
                    /* onClick={} */
                    gradient={["#EBAE58", "#EBAE58"]}
                  />
                ) : null}
                {props.buttonType === "subscribe" ? (
                  <SelectButton
                    label={props.buttonLabel}
                    submitting={false}
                    fullwidth={false}
                    color="#3E4347"
                    disabled={false}
                    checked={true}
                    padding={"12px 15px 12px 40px"}
                    borderRadius={8}
                    onClick={props.onClick}
                    gradient={["#ECEDF1", "#ECEDF5"]}
                  />
                ) : null}
              </div>
            ) : null}

            {/*             <h1
              style={{
                fontSize: "24px",
                fontWeight: 900,
                margin: "0 0 4px 0",
                padding: 0,
                display: "flex",
              }}
            >
              {props.icon ? (
                <div style={{ marginRight: "8px" }}>{props.icon}</div>
              ) : null}

              {props.eventName}
            </h1>
 */}
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 900,
                margin: "0 0 4px 0",
                padding: 0,
                display: "flex",
              }}
            >
              {props.icon ? (
                <div style={{ marginRight: "8px" }}>{props.icon}</div>
              ) : null}
              {text_truncate(props.name, 40)}
            </h1>
            <span style={{ fontSize: "15px", lineHeight: 1.5, opacity: 0.8 }}>
              {text_truncate(props.description, 100)}
            </span>
            {props.clock ? (
              <CountdownClock days={15} hrs={6} mins={42} secs={52} />
            ) : null}
          </div>
        </div>
      </div>
      <div style={{ height: props.gap }} />
    </div>
  );
};

export const CollapsibleText = (props) => {
  const [open, setOpen] = useState(props.open);
  const [disabled, buttonDisable] = useState(false);
  /*   TweenLite.to(document.getElementById("textBox"), 0.5, {
    scaleY: 0,
    ease: Power4.easeOut,
  });
 */

  const disableButton = () => {
    buttonDisable(false);
  };

  const onSubmit = () => {
    console.log(open);
    buttonDisable(true);

    setOpen(!open);

    TweenLite.fromTo(
      document.getElementById("textBox"),
      props.speedInSeconds,
      {
        css: { height: open ? "auto" : 0 },
        delay: 0,
        ease: Power4.easeOut,
      },
      {
        css: { height: open ? 0 : "auto" },
        delay: 0,
        onComplete: disableButton,
        ease: Power4.easeOut,
      }
    );

    TweenLite.to(document.getElementById("chevron"), props.speedInSeconds, {
      rotation: open ? 0 : -180,
      transformOrigin: "center 55%",
      delay: 0,
      ease: Power4.easeOut,
    });
  };

  return (
    <div style={{}}>
      <div
        className="card cardHover"
        style={{
          marginBottom: "10px",
          padding: "10px",
          fontSize: "16px",
          fontWeight: 600,
          display: "flex",
          width: props.fullwidth ? "100%" : props.width,
          justifyContent: "space-between",
          alignItems: "center",
        }}
        disabled={disabled}
        onClick={() => onSubmit()}
      >
        {props.label}
        <div id="chevron" style={{ marginRight: "10px" }}>
          <img src="images/chevronUp.svg" style={{ width: "20px" }} />
        </div>
      </div>

      <div
        id="textBox"
        style={{
          height: 0,
          overflowY: "hidden",
          display: "block",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "3px",
          }}
        >
          {props.content}
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};
