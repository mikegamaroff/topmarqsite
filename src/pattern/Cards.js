import React from "react";
import { Button } from "./forms/Button";
import {
  faCalendarAlt,
  faClock,
  faUsers,
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
          <h1 style={{ fontSize: "16px", margin: 0 }}>
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
            style={{ fontSize: "13px", fontWeight: 100, marginRight: "16px" }}
          >
            <span style={{ marginRight: "5px" }}>
              <FontAwesomeIcon size="s" color="#606670" icon={faClock} />
            </span>
            {props.date}
          </h3>
          <h3
            style={{ fontSize: "13px", fontWeight: 100, marginRight: "16px" }}
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
