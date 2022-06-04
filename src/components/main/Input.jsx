import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../assets/styles/main/Main.module.css";
import { editTab } from "../../redux/features/tab/tabSlice";

const Input = ({ activeTab }) => {
  const [selectItem, setSelectItem] = useState("SELECT");
  const [inputQuery, setInputQuery] = useState("SELECT * from lone_wolf");

  const tabState = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  const editTabHandler = (e) => {
    const payload = {
      id: activeTab.id,
      title: selectItem,
      query: inputQuery,
    };

    dispatch(editTab(payload));
  };

  useEffect(() => {
    editTabHandler();
    return () => {};
  }, [selectItem]);

  return (
    <div className={style.Input_Container}>
      <div className={style.DropDown}>
        <select
          value={selectItem}
          onChange={(e) => setSelectItem(e.target.value)}
        >
          <option value="SELECT">SELECT</option>
          <option value="CREATE">CREATE</option>
          <option value="ALTER">ALTER</option>
        </select>
      </div>
      <div className={style.Input}>
        <input
          type="text"
          placeholder={inputQuery}
          value={activeTab.query ? activeTab.query : inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
      </div>
      <div className={style.Button} onClick={editTabHandler}>
        <button type="submit">Enter</button>
      </div>
    </div>
  );
};

export default Input;
