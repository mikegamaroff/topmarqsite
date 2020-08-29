import React from "react";
import { PopularThread } from "./cards/PopularThread";
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
