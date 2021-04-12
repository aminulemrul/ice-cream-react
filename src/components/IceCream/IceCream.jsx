import React from "react";
// import Builder from "../Builder/Builder";
import cssClasses from "./IceCream.module.css";
import Scoop from "./Scoop/Scoop";

const IceCream = () => {
  return (
    <div>
      <div className={cssClasses.icecream}>
        <p className={cssClasses.cone}></p>
        {/* <p>Please start adding scoops</p> */}
        <Scoop />
        <div className={cssClasses.cherry}></div>
      </div>
      {/* <Builder /> */}
    </div>
  );
};

export default IceCream;
