import React from "react";
import { Input } from "./forms/Fields";
import { PostUpVote, PostComments, Trophy, Ribbon } from "../svg/svgIcons";

export const UserInputField = (props) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        verticalAlign: "middle",
        alignItems: "center",
      }}
    >
      <img
        style={{
          borderRadius: "100%",
          margin: "7px",
          height: "35px",
          border: "solid 2px #D2D2D2",
        }}
        src={props.profileThumbnail}
      />

      <div style={{ width: "100%" }}>
        <Input
          placeholder={props.placeholder}
          name="addThread"
          type="text"
          color="#545860"
          width="100%"
          /*   height="30px" */
          error={false}
          validated={false}
          handleChange={props.handleChange}
          autoComplete="off"
          gap="10px"
          icon={false}
          submitButton={props.submitButton}
          submitImg={"images/send.svg"}
        />
      </div>
    </div>
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
        />
      </div>
      <div style={{ height: props.gap }}></div>
    </div>
  );
};

export const Post = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "100%", padding: "0px" }}>
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
            top: "-5px",
            right: "40px",
            zIndex: 2,
          }}
        >
          <Ribbon color="#CC8B2F" id="ribbon" scale={1} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "-3px",
            right: "39px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 3,
              margin: "auto",
              top: 2,

              fontSize: "16px",
              letterSpacing: ".2px",
              fontWeight: 900,
              color: "#FFFFFF",
              textShadow: "0 1px 0 rgba(34,26,0,0.50)",
            }}
          >
            1st
          </div>
          <Ribbon color="#784A0C" id="ribbonShadow" scale={1} />
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
            <h3 style={{ fontSize: "14px", margin: "0" }}>Tom Russo</h3>
            <div>
              <CountdownClock />
            </div>
          </div>
        </div>
        <div style={{ padding: "15px" }}>
          <h3 style={{ fontSize: "16px", margin: "0", color: "#333333" }}>
            Mercedes Benz backs into Ferrari 458 Special
          </h3>
          <div style={{ fontSize: "13px", marginTop: "5px", color: "#8A8A8A" }}>
            Looks like this will be a pretty expensive visit to the car show!!
          </div>
        </div>
        <div
          style={{
            background: `url("/images/carCrash.jpg") no-repeat center center`,
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
              <PostComments color="#0155B0" scale=".9" />
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
              <PostUpVote color="#7A0014" scale=".9" />
            </span>
            <span>8 closed</span>
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
          />
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
      <span style={style.number}>15</span>
      <span style={style.label}>days</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>09</span>
      <span style={style.label}>hrs</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>12</span>
      <span style={style.label}>mins</span>
      <span style={style.colon}>:</span>
      <span style={style.number}>56</span>
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
          <Trophy color="#E2AC61" id="trophy1" scale={1} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy color="#ABABAB" id="trophy2" scale={1} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Trophy color="#D37139" id="trophy3" scale={1} />
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
