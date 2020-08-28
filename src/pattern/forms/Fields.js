import React from "react";
const xError = <div className="xError xStatus" />;
const xValidated = <div className="xValidated xStatus" />;

export const Input = (props) => {
  return (
    <div
      className="fieldHolder"
      style={{
        width: props.width,
        marginTop: props.gap,
        marginBottom: props.gap,
      }}
    >
      <div className="errorIcon">
        {props.error ? xError : null}
        {!props.error && props.validated ? xValidated : null}
      </div>
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        style={{
          color: props.color,
          background: props.error ? "#FFF0F0" : "#ecedf1",
          borderColor: `${props.error && "rgba(255, 4, 4, 0.5)"}`,
        }}
      />
    </div>
  );
};
/*
export const Textarea = (props) => {
  return (
    <div className="fieldHolder">
      <div className="errorIcon">
        {props.error ? <div className="xError" /> : null}
      </div>

      <textarea
        // className="testInput"
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        style={{ color: props.color }}
        onChange={props.onChange}
        rows={props.rows}
        autoComplete={props.autoComplete}
      ></textarea>
      <style jsx="true">{`
        .errorIcon {
          position: absolute;
          right: 5px;
          height: 15px;

          bottom: 6px;
        }
        .fieldHolder {
          position: relative;
          width: ${props.width};
          margin-top: ${props.gap};
          margin-bottom: ${props.gap};
        }
        .xError {
          display: block;
          box-sizing: border-box;
          width: 15px;
          height: 15px;
          border-width: 3px;
          border-style: solid;
          border-color: red;
          border-radius: 100%;
          background: -webkit-linear-gradient(
              -45deg,
              transparent 0%,
              transparent 46%,
              white 46%,
              white 56%,
              transparent 56%,
              transparent 100%
            ),
            -webkit-linear-gradient(45deg, transparent 0%, transparent 46%, white
                  46%, white 56%, transparent 56%, transparent 100%);
          background-color: red;

          transition: all 0.2s ease;
        }

        textarea {
          resize: none;
          color: ${props.color};
          position: relative;
          width: 100%;
          font-size: 16px;
          background: rgb(144, 144, 144, 0.3);
          border-radius: 4px;
          border: solid 1px
            ${props.error ? "rgba(255, 4, 4, 0.5)" : "rgba(144, 144, 144, 0.5)"};
          display: block;
          outline: 0;
          padding: 10px;
          transition: 0.2s ease-in-out;
          opacity: 1;
        }
        textarea::-webkit-input-placeholder {
          color: ${props.color};
          opacity: 0.6;
        }
        textarea:focus::-webkit-input-placeholder {
          opacity: 0;
          transition: 0.2s ease-in-out;
        }
        textarea:focus {
          background: rgb(144, 144, 144, 0.1);
        }
      `}</style>
    </div>
  );
};
 */
export const Button = (props) => {
  return (
    <div
      className="buttonHolder"
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
        {props.submitting ? props.submitting : props.label}
      </button>
    </div>
  );
};
