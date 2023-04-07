import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ backgroundColor: "transparent", padding: "80px", zIndex: "3" }}
        onClick={props.onClick}
      >
        {" "}
      </div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ color: "red", padding: "60px", zIndex: "3" }}
        onClick={props.onClick}
      >
        {" "}
      </div>
    </>
  );
}
