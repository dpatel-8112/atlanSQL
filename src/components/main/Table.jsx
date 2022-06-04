import React from "react";
import style from "../../assets/styles/main/Main.module.css";
import Row from "./Row";

const Table = ({ activeTab }) => {
  return (
    <div className={style.Table_Container}>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {activeTab.data.users ? (
            activeTab.data.users.map((item, index) => {
              return <Row item={item} />;
            })
          ) : (
            <tr>
              <td>LOADING . . .</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
