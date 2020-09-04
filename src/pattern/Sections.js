import React from "react";
import { PopularThread } from "./cards/PopularThread";
import { UserInputField } from "./Elements";
export const PopularThreads = (props) => {
  return (
    <>
      <h2>Popular threads</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gridGap: "20px",
          width: "100%",
        }}
      >
        {props.popularThreadList &&
          props.popularThreadList.map((val, i) => {
            return (
              <div id={i}>
                <PopularThread
                  description={val.description}
                  image={val.image}
                  profileThumbnail={val.profileThumbnail}
                  userID={val.userID}
                  gap={25}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};
export const DiscussionItem = (props) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          verticalAlign: "middle",
          alignItems: "top",
        }}
      >
        <img
          style={{
            borderRadius: "100%",
            marginRight: "7px",
            height: "35px",
            border: "solid 2px #D2D2D2",
          }}
          src="images/profPic.png"
        />

        <div
          style={{
            width: "100%",
            background: "#FFFFFF",
            border: `1px solid #E9E0E0`,
            borderRadius: "6px",
            padding: "10px",
            fontSize: "12px",
          }}
        >
          These are some sweet rides here!
        </div>
      </div>
      <div
        style={{
          width: "100%",
          fontSize: "11px",
          color: "#6A6A6A",
          letterSpacing: 0,
          padding: "3px 0 3px 0",
          fontStyle: "italic",
          textAlign: "right",
          marginBottom: "15px",
        }}
      >
        3 minutes ago
      </div>
    </div>
  );
};
export const DiscussionBox = (props) => {
  return (
    <div>
      <UserInputField
        height={30}
        profileThumbnail="images/profPic.png"
        gap={10}
        placeholder="Leave comment"
      />
      <div
        className="car-background"
        style={{
          boxShadow: `inset 1px 1px 3px 0 rgba(0,0,0,0.35)`,
          borderRadius: "13px",
          border: `solid 1px rgba(197, 197, 197, 0.3)`,
          padding: "15px",
          overflowX: "scroll",
          height: "200px",
        }}
      >
        <DiscussionItem />
        <DiscussionItem />
        <DiscussionItem />
      </div>
    </div>
  );
};
