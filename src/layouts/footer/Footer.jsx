import React from "react";
import style from "../../assets/styles/footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.Footer_Container}>
      ©️ {new Date().getFullYear()} - All rights reserved |
      <a href="https://github.com/dpatel-8112"> github</a>
    </div>
  );
};

export default Footer;
