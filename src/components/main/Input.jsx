import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../assets/styles/main/Main.module.css";
import { editTab } from "../../redux/features/tab/tabSlice";

const Input = () => {
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");

  const tabState = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  useEffect(() => {
    tabState.tabs.forEach((tab) => {
      if (tab.id === tabState.active) {
        setQuery(tab.query || "SELECT");
      }
    });
  }, [tabState.active]);

  const queryHandler = (event) => {
    setQuery(event.target.value);
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
    setQuery(event.target.value);
    // saveHandler();
  };

  const saveHandler = () => {
    tabState.tabs.forEach((tab) => {
      if (tab.id === tabState.active) {
        dispatch(
          editTab({
            id: tab.id,
            title: title,
            api: tab.api,
            query: query,
          })
        );
      }
    });
  };

  const searchHandler = (event) => {
    event.preventDefault();
    saveHandler();
  };

  return (
    <div className={style.Input_Container}>
      <div className={style.DropDown}>
        <select value={title} onChange={titleHandler}>
          <option value="SELECT">SELECT</option>
          <option value="CREATE">CREATE</option>
          <option value="ALTER">ALTER</option>
        </select>
      </div>
      <div className={style.Input}>
        <input
          type="text"
          placeholder={query}
          value={query}
          onChange={queryHandler}
        />
      </div>
      <div className={style.Button} onClick={searchHandler}>
        <button type="submit" onClick={searchHandler}>
          Enter
        </button>
      </div>
    </div>
  );
};

export default Input;
