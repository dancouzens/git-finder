import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <img
    src={spinner}
    alt="Loading..."
    style={{
      width: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  />
);

export default Spinner;
