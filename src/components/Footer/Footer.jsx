import React from "react";
import cssClasses from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div class={["container", cssClasses.container].join(" ")}>
        <div>Copyright &copy;2020.</div>
        <div class="textRight">
          Built with <span class="red">&hearts;</span> by
          <a href="h" target="_blank">
            Create React App
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
