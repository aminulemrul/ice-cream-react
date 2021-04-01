import React from "react";
import cssClasses from "./Builder.module.css";

const Builder = () => {
  return (
    <div className={cssClasses.react}>
      <div className={cssClasses.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        {/* item */}
        {/* total price */}
        <button
          type="button"
          className={[cssClasses.order, cssClasses.rounded].join(" ")}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Builder;
