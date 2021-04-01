import React from "react";
import cssClasses from "./Scoop.module.css";

const Scoop = () => {
  return <div class={[cssClasses.scoop, cssClasses.vanilla].join(" ")}></div>;
};

export default Scoop;
