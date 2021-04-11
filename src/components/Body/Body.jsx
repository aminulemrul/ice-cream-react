import React from "react";
import IceCreamBuilder from "../IceCream/IceCream";
import cssClasses from "./Body.module.css";

const Body = () => {
  return (
    <div className={cssClasses.mainBody}>
      <IceCreamBuilder />
    </div>
  );
};

export default Body;
