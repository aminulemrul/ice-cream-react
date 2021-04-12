import React from "react";
import cssClasses from "./Builder.module.css";
import Items from "./Items/Items";
import Modal from "./Modal/Modal";
import TotalPrice from "./TotalPrice/TotalPrice";

const Builder = () => {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.builder}>
        <h3>Build your own Ice Cream Sundaess</h3>
        <Items />
        <TotalPrice />
        <button
          type="button"
          className={[cssClasses.order, cssClasses.rounded].join(" ")}
        >
          Add to Cart
        </button>
      </div>
      <Modal> Hello Modal </Modal>
    </div>
  );
};

export default Builder;
