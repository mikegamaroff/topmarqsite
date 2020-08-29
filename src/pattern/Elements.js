import React from "react";
import { Input } from "./forms/Fields";
export const AddThread = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "100%", padding: "5px" }}>
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
              placeholder="Add a thread"
              name="addThread"
              type="text"
              color="#545860"
              width="100%"
              /*   height="30px" */
              error={false}
              validated={false}
              onChange={props.handleChange}
              autoComplete="off"
              gap="10px"
              icon={false}
              submitButton={props.action}
              submitImg={"images/send.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
