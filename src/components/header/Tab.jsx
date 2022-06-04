import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../assets/styles/header/Header.module.css";
import {
  addTab,
  deleteTab,
  setActive,
  editTab,
} from "../../redux/features/tab/tabSlice";

const Tab = ({ item }) => {
  const tabState = useSelector((state) => state.tab);

  const dispatch = useDispatch();

  const removeTabHandler = (id) => {
    dispatch(deleteTab(id));
  };

  const activeTabHandler = (id) => {
    dispatch(setActive(id));
  };

  return (
    <div
      className={
        style.Tab + " " + (tabState.active === item.id ? style.ActiveTab : "")
      }
      key={item.id}
      onClick={() => activeTabHandler(item.id)}
    >
      <div className={style.TabName}>
        {item.title} : {item.id}
      </div>
      <div
        className={style.CloseIcon}
        onClick={() => removeTabHandler(item.id)}
      >
        ❌
      </div>
    </div>
  );
};

export default Tab;
