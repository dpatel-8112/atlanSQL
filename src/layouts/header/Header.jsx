import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../assets/styles/header/Header.module.css";
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
        query: "SELECT * from lone_wolf",
      })
    );
  };

  const removeTabHandler = (id) => {
    dispatch(deleteTab(id));
  };

  const activeTabHandler = (id) => {
    dispatch(setActive(id));
  };

  useEffect(() => {
    console.log(tabState);

    return () => {};
  }, [tabState]);

  return (
    <div className={style.Header_Container}>
      <div className={style.Tabs}>
        {tabState.tabs
          .filter((tab) => tab.isDeleted === false)
          .map((item, index) => {
            return (
              <div
                className={
                  style.Tab +
                  " " +
                  (tabState.active === item.id ? style.ActiveTab : "")
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
          })}
        <div className={style.AddTab} onClick={addTabHandler}>
          ➕
        </div>
      </div>
    </div>
  );
};

export default Header;
