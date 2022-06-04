import React, { useEffect } from "react";
import style from "../../assets/styles/main/Main.module.css";

const Main = () => {
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((json) => console.log(json));

    return () => {};
  }, []);

  return (
    <div className={style.Main_Container}>
      <div className={style.Input_Container}>
        <div className={style.DropDown}>
          <select>
            <option value="SELECT">SELECT</option>
            <option value="SELECT">SELECT</option>
            <option value="SELECT">SELECT</option>
          </select>
        </div>
        <div className={style.Input}>
          <input type="text" placeholder="select * from lone_wolf" />
        </div>
        <div className={style.Button}>
          <button type="submit">Enter</button>
        </div>
      </div>
      <div>
        <div className={style.Table_Container}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>
                  <div className={style.Sort_Container}>
                    <div className={style.Sort_Icon}>
                      <i className="fas fa-sort-up"></i>
                    </div>
                    <div className={style.Sort_Icon}>
                      <i className="fas fa-sort-down"></i>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>25</td>
                <td>
                  <div className={style.Sort_Container}>
                    <div className={style.Sort_Icon}>
                      <i className="fas fa-sort-up"></i>
                    </div>
                    <div className={style.Sort_Icon}>
                      <i className="fas fa-sort-down"></i>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
