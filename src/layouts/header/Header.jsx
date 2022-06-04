import React from "react";
import style from "../../assets/styles/header/Header.module.css";

const data = [1, 2, 3, 4, 4, 4];

const Header = () => {
  return (
    <div className={style.Header_Container}>
      <div className={style.Tabs}>
        {data.map((item, index) => {
          return (
            <div className={style.Tab} key={index}>
              <div className={style.TabName}>Tab : {item}</div>
              <div className={style.CloseIcon}>❌</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
