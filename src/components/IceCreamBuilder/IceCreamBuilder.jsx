import React, { Component } from "react";
import Builder from "../Builder/Builder";
import Icecream from "../IceCream/IceCream";
import classes from "./IceCreamBuilder.module.css";

export default class IceCreamBuilder extends Component {
  render() {
    return (
      <div className={["container", classes.container].join(" ")}>
        <Icecream />
        <Builder />
      </div>
    );
  }
}
