import React from "react";
import PropTypes from "prop-types";
import cssClasses from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import reactLogo from "../../assets/images/react.svg";

const Header = (props) => {
  return (
    <header>
      <div class="container">
        <div>
          <img class={cssClasses.logo} src={logo} alt="Logo" />
        </div>
        <div class="textRight">
          <img src={reactLogo} alt="React" class={cssClasses.reactLogo} />
          <strong>React</strong>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
