import React from "react";
export const Button = (props) => {
  return (
    <div
      style={{
        position: "relative",

        marginTop: props.gap,
        marginBottom: props.gap,
      }}
    >
      <button
        disabled={props.disabled || props.submitting}
        onClick={props.onClick}
        // className="testInput"

        style={{
          cursor: props.disabled || props.submitting ? "" : "pointer",
          background: props.error ? "#FFF0F0" : "#ecedf1",
          borderColor: props.error && "rgba(255, 4, 4, 0.5)",
          background: props.bgImage
            ? `url("${props.bgImage}") no-repeat center center transparent`
            : `linear-gradient(
              180deg,
              ${
                props.disabled || props.submitting || !props.gradient
                  ? "#666666"
                  : props.gradient[0]
              } 0%,
              ${
                props.disabled || props.submitting || !props.gradient
                  ? "#CCCCCC"
                  : props.gradient[1]
              } 100%
            )`,
          color: props.disabled || props.submitting ? "#555555" : props.color,
          width: props.fullwidth ? "100%" : "auto",
        }}
      >
        {props.icon && <span id="buttonIcon">{props.icon}</span>}
        {props.submitting ? props.submitting : props.label}
      </button>
    </div>
  );
};

export const TextButton = (props) => {
  return (
    <div
      style={{
        fontSize: "14px",
        fontWeight: 900,
        marginBottom: "15px",
        display: "inline-block",
      }}
      className="TextButton"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {props.label}
        <span style={{ marginLeft: "7px" }}>{props.icon}</span>
      </div>
    </div>
  );
};
