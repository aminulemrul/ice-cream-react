import React from "react";
import classes from "./Item.module.css";

const Item = () => {
  return (
    <li className={classes.item}>
      <span>Name</span>

      <span className={classes.quantity}>3</span>

      <div className={classes.right}>
        <button
          onClick="asdf"
          type="button"
          className={[classes.plus, "rounded"].join(" ")}
        >
          +
        </button>
        <button
          type="button"
          onClick="fas"
          className={[classes.minus, "rounded"].join(" ")}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default Item;
