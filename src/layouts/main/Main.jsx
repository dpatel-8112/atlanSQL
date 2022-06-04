import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../assets/styles/main/Main.module.css";

const Main = () => {
  const tabState = useSelector((state) => state.tab);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState({
    ...tabState.tabs.filter((item) => item.id === tabState.active)[0],
    limit: tabState.total,
    skip: 1,
    data: {},
  });

  useEffect(() => {
    setActiveTab({
      ...tabState.tabs.filter((item) => item.id === tabState.active)[0],
      limit: tabState.totalTab,
      skip: 1,
      data: {},
    });
    console.log(activeTab.data);
  }, [tabState.active]);

  useEffect(() => {
    fetch(`${activeTab.api}?limit=${activeTab.limit}&skip=${activeTab.skip}`)
      .then((res) => res.json())
      .then((data) => {
        setActiveTab({
          ...activeTab,
          data: data,
        });
      });
  }, [activeTab.id]);

  return (
    <div className={style.Main_Container}>
      <div className={style.Input_Container}>
        <div className={style.DropDown}>
          <select value={activeTab.title}>
            <option value="SELECT">SELECT</option>
            <option value="CREATE">CREATE</option>
            <option value="ALTER">ALTER</option>
          </select>
        </div>
        <div className={style.Input}>
          <input
            type="text"
            placeholder={activeTab.query}
            value={activeTab.query}
          />
        </div>
        <div className={style.Button}>
          <button type="submit">Enter</button>
        </div>
      </div>
      <div className={style.Table_Container}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>University</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {activeTab.data.users ? (
              activeTab.data.users.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.university}</td>
                    <td>
                      <img src="" />
                      <img
                        src={item.image}
                        alt=""
                        srcset=""
                        width="40px"
                        height="40px"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>LOADING . . .</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
