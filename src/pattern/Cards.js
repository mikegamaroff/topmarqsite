import React from "react";
import { Button } from "./forms/Button";
import {
  faCalendarAlt,
  faClock,
  faUsers,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text_truncate } from "../methods/tools";

export const EventCard = (props) => {
  return (
    <div>
      <div className="card" style={{ height: "180px" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            top: 0,
            width: "100%",
            height: "75%",
            background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px 13px 0 0`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <img src="images/chevron.svg" />
          </div>
          <h1 style={{ fontSize: "14px", margin: 0 }}>
            <span style={{ marginRight: "8px" }}>
              <FontAwesomeIcon size="lg" color="#FFFFFF" icon={faCalendarAlt} />
            </span>
            {text_truncate(props.name, 23)}
          </h1>
          <p style={{ fontSize: "12px", lineHeight: 1.5, opacity: 0.8 }}>
            {text_truncate(props.description, 55)}
          </p>
        </div>
        <div
          style={{
            bottom: 0,
            height: "25%",
            position: "absolute",
            left: 0,
            display: "flex",
            padding: `0px 15px 0px 15px`,
          }}
        >
          <h3
            style={{ fontSize: "11px", fontWeight: 100, marginRight: "16px" }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faClock} />
            </span>
            {props.date}
          </h3>
          <h3
            style={{ fontSize: "11px", fontWeight: 100, marginRight: "16px" }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </span>
            {props.attending} Attending
          </h3>
        </div>
      </div>
      {props.sponsored ? (
        <div
          style={{
            fontSize: "13px",
            fontStyle: "italic",
            color: "#A0A0A0",
            fontWeight: "500",
            textAlign: "right",
            marginTop: "10px",
          }}
        >
          Sponsored
        </div>
      ) : null}
      <div style={{ height: props.gap }}></div>
      {props.line ? (
        <>
          <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
          <div style={{ height: props.gap }}></div>
        </>
      ) : null}
    </div>
  );
};

export const EventTitleCard = (props) => {
  return (
    <div>
      {props.eventOwnerTitle ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              borderRadius: "100%",
              margin: "7px",
              height: "30px",
              border: "solid 2px #D2D2D2",
            }}
            src={"images/profPic.png"}
          />

          <div style={{ width: "100%", fontSize: "14px", fontWeight: 900 }}>
            {props.groupName}
          </div>
        </div>
      ) : null}
      <div className="card" style={{ height: "150px" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            padding: "15px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            top: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, .1) 50%
    ),
    url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-start`,
          }}
        >
          <h1 style={{ fontSize: "16px", margin: 0 }}>
            <span style={{ marginRight: "8px" }}>
              <FontAwesomeIcon size="lg" color="#FFFFFF" icon={faCalendarAlt} />
            </span>
            {text_truncate(props.eventName, 23)}
          </h1>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
      {props.line ? (
        <>
          <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
          <div style={{ height: props.gap }}></div>
        </>
      ) : null}
    </div>
  );
};
export const GroupShowcase = (props) => {
  return (
    <div>
      <div className="card" style={{ height: "220px" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",
            top: 0,
            width: "100%",
            height: "80%",
            paddingBottom: "15px",
            background: `linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 1) 100%
      ),
      url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px 13px 0 0`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        >
          <div style={{ position: "absolute", top: "10px", right: "10px" }}>
            <img src="images/chevron.svg" />
          </div>
          <h1 style={{ fontSize: "16px", margin: 0 }}>
            <span style={{ marginRight: "8px" }}>
              <FontAwesomeIcon size="lg" color="#FFFFFF" icon={faUsers} />
            </span>
            {text_truncate(props.name, 23)}
          </h1>
          <p style={{ fontSize: "12px", lineHeight: 1.5, opacity: 0.8 }}>
            {text_truncate(props.description, 67)}
          </p>
          <Button
            label="More groups"
            submitting={false}
            fullwidth={false}
            color="#202020"
            disabled={false}
            padding={"8px 10px 8px 10px"}
            borderRadius={8}
            /* onClick={} */
            gradient={["#FFFFFF", "#E4E4E4"]}
            gap={0}
          />
        </div>
        <div
          style={{
            bottom: 0,
            height: "20%",
            position: "absolute",
            left: 0,
            display: "flex",
            padding: `0px 15px 0px 15px`,
          }}
        >
          <h3
            style={{ fontSize: "13px", fontWeight: 100, marginRight: "16px" }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </span>
            {props.attending} members
          </h3>
        </div>
      </div>

      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const LatestGroups = (props) => {
  let buttonColor = ["#EAEBF0", "#EAEBF0"];
  let buttonLabel = "Join";
  if (props.status === "unjoined") {
    buttonColor = ["#EAEBF0", "#EAEBF0"];
    buttonLabel = "Join";
  } else if (props.status === "pending") {
    buttonColor = ["#F2EFEF", "#F2EFEF"];
    buttonLabel = "Pending";
  }
  return (
    <div>
      <div className="card" style={{ height: "auto", padding: 0 }}>
        <div
          style={{
            display: "flex",
            padding: "0px 15px 0px 15px",
            boxSizing: "border-box",
            webkitBoxSizing: "border-box",
            MozBoxSizing: "border-box",

            width: "100%",
            height: "60px",
            background: `
    url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px 13px 0 0`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: `0px 15px 0px 15px`,
          }}
        >
          <h3
            style={{ fontWeight: 500, fontSize: "13px", marginRight: "16px" }}
          >
            {text_truncate(props.name, 18)}
          </h3>

          <div
            style={{
              fontSize: "12px",
              fontWeight: 300,
              margin: "0 16px 8px 0",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </span>
            {props.members} members
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 300,
              margin: "0 16px 16px 0",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faCalendarAlt} />
            </span>
            {props.events} events
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "35px",
              paddingBottom: "15px",
            }}
          >
            {props.status === "joined" ? (
              <>
                <h3 style={{ fontSize: "13px", fontWeight: "600", margin: 0 }}>
                  <span style={{ marginRight: "8px" }}>
                    <FontAwesomeIcon
                      size="lg"
                      color="#E2AC61"
                      icon={faCheckCircle}
                    />
                  </span>
                  Member
                </h3>
              </>
            ) : (
              <Button
                label={buttonLabel}
                submitting={false}
                fullwidth={false}
                color="#202020"
                disabled={false}
                padding={"8px 20px 8px 20px"}
                borderRadius={8}
                /* onClick={} */
                gradient={buttonColor}
              />
            )}
          </div>
        </div>
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const GroupsHorizontal = (props) => {
  let buttonColor = ["#EAEBF0", "#EAEBF0"];
  let buttonLabel = "Join";
  if (props.status === "unjoined") {
    buttonColor = ["#EAEBF0", "#EAEBF0"];
    buttonLabel = "Join";
  } else if (props.status === "pending") {
    buttonColor = ["#F2EFEF", "#F2EFEF"];
    buttonLabel = "Pending";
  }
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "50px auto 80px",
        }}
      >
        <div
          style={{
            display: "flex",

            width: "50px",
            height: "50px",
            background: `
    url("${props.image}") no-repeat center center`,

            backgroundSize: "cover",
            borderRadius: `13px`,
            color: "white",
            flexDirection: "column",
            justifyContent: `flex-end`,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontWeight: 500,
              fontSize: "12px",
              margin: "0 16px 5px 0",
            }}
          >
            {text_truncate(props.name, 18)}
          </h3>

          <div
            style={{
              fontSize: "12px",
              fontWeight: 300,
              margin: "0 16px 5px 0",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faUsers} />
            </span>
            {props.members} members
          </div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 300,
              margin: "0 16px 16px 0",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faCalendarAlt} />
            </span>
            {props.events} events
          </div>
        </div>
        <div
          style={{
            height: "35px",
            minWidth: "80px",
            paddingBottom: "15px",
          }}
        >
          {props.status === "joined" ? (
            <>
              <h3 style={{ fontSize: "13px", fontWeight: "600", margin: 0 }}>
                <span style={{ marginRight: "8px" }}>
                  <FontAwesomeIcon
                    size="lg"
                    color="#E2AC61"
                    icon={faCheckCircle}
                  />
                </span>
                Member
              </h3>
            </>
          ) : (
            <Button
              label={buttonLabel}
              submitting={false}
              fullwidth={true}
              color="#202020"
              disabled={false}
              padding={"8px 10px 8px 10px"}
              borderRadius={8}
              /* onClick={} */
              gradient={buttonColor}
            />
          )}
        </div>
      </div>
      <div style={{ borderBottom: "solid 1px #D8D8D8" }}></div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};
