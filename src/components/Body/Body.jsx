import React from "react";
import IceCreamBuilder from "./../IceCreamBuilder/IceCreamBuilder";
import cssClasses from "./Body.module.css";

const Body = () => {
  return (
    <div className={cssClasses.mainBody}>
      <IceCreamBuilder />
    </div>
  );
};

export default Body;
