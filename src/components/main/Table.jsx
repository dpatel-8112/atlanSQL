import React, { useEffect, useState } from "react";
import style from "../../assets/styles/main/Main.module.css";
import Row from "./Row";

const Table = ({ activeTab }) => {
  const initialChecked = {
    username: false,
    firstName: false,
    lastName: false,
    email: false,
    university: false,
  };

  const [checked, setChecked] = useState(initialChecked);

  let sortedData = activeTab.data.users ? activeTab.data.users : [];

  const sortHandler = (e) => {
    setChecked({
      ...initialChecked,
      [e.target.value]: e.target.checked,
    });

    const sortBy = e.target.value;
    const sortOrder = e.target.checked ? "desc" : "asc";

    sortedData = sortedData.sort((a, b) => {
      if (sortBy === "username") {
        return sortOrder === "asc"
          ? a.username.localeCompare(b.username)
          : b.username.localeCompare(a.username);
      } else if (sortBy === "firstName") {
        return sortOrder === "asc"
          ? a.firstName.localeCompare(b.firstName)
          : b.firstName.localeCompare(a.firstName);
      } else if (sortBy === "lastName") {
        return sortOrder === "asc"
          ? a.lastName.localeCompare(b.lastName)
          : b.lastName.localeCompare(a.lastName);
      } else if (sortBy === "email") {
        return sortOrder === "asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email);
      } else if (sortBy === "university") {
        return sortOrder === "asc"
          ? a.university.localeCompare(b.university)
          : b.university.localeCompare(a.university);
      }
    });
  };

  useEffect(() => {
    if (activeTab.data.users) {
      setChecked(initialChecked);
    }
  }, [activeTab.data.users]);

  return (
    <div className={style.Table_Container}>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>
              Username
              <input
                type="checkbox"
                onChange={sortHandler}
                value="username"
                checked={checked.username}
              />
            </th>
            <th>
              First Name
              <input
                type="checkbox"
                onChange={sortHandler}
                value="firstName"
                checked={checked.firstName}
              />
            </th>
            <th>
              Last Name
              <input
                type="checkbox"
                onChange={sortHandler}
                value="lastName"
                checked={checked.lastName}
              />
            </th>
            <th>
              Email
              <input
                type="checkbox"
                onChange={sortHandler}
                value="email"
                checked={checked.email}
              />
            </th>
            <th>Phone</th>

            <th>
              University
              <input
                type="checkbox"
                onChange={sortHandler}
                value="university"
                checked={checked.university}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log(sortedData)}
          {sortedData ? (
            sortedData.map((item, index) => {
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
