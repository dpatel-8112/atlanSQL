import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../assets/styles/header/Header.module.css";
import Tab from "../../components/header/Tab";
import {
  addTab,
  deleteTab,
  setActive,
} from "../../redux/features/tab/tabSlice";

const data = [1, 2, 3, 4, 4, 4];

const Header = () => {
  const tabState = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  const addTabHandler = () => {
    dispatch(
      addTab({
        id: tabState.total + 1,
        title: "new tab",
        api: "",
        query: "",
      })
    );
  };

  useEffect(() => {
    return () => {};
  }, [tabState]);

  return (
    <div className={style.Header_Container}>
      <div className={style.Tabs}>
        {tabState.tabs
          .filter((tab) => tab.isDeleted === false)
          .map((item, index) => {
            return <Tab key={item.id} item={item} />;
          })}
        <div className={style.AddTab} onClick={addTabHandler}>
          ➕
        </div>
      </div>
    </div>
  );
};

export default Header;
