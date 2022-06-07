import React, { useEffect, useState } from "react";
import style from "../../assets/styles/main/Main.module.css";
import Row from "./Row";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Table = () => {
  const tabState = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const fetchData = async () => {
    if (data.users.length >= 100) {
      setData({ ...data, hasMore: false });
      return;
    }

    if (data.api) {
      const response = await axios.get(
        `${data.api}?limit=${data.limit}&skip=${data.skip}`
      );
      setData({
        ...data,
        users: [...data.users, ...response.data.users],
      });
    }
  };

  useEffect(() => {
    tabState.tabs.forEach((tab) => {
      if (tab.id === tabState.active) {
        setData({ ...tab, limit: 10, skip: 0, hasMore: true, users: [] });
      }
    });
    fetchData();
  }, [tabState.active]);

  useEffect(() => {
    fetchData();
  }, [data.skip, data]);

  const handleClick = (event) => {
    // event.preventDefault();
    setData({ ...data, skip: data.skip + 10 });
  };

  const initialChecked = {
    username: false,
    firstName: false,
    lastName: false,
    email: false,
    university: false,
  };

  const [checked, setChecked] = useState(initialChecked);

  let sortedData = data.users ? data.users : [];

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

  return (
    <>
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
          {console.log(sortedData)}
          <tbody>
            <InfiniteScroll
              dataLength={sortedData.length}
              next={handleClick}
              hasMore={data.hasMore}
              height={600}
              loader={
                <tr>
                  <td>
                    <h4>Loading...</h4>
                  </td>
                </tr>
              }
              endMessage={
                <tr>
                  <td>
                    <h4>Yay! You have seen it all</h4>
                  </td>
                </tr>
              }
            >
              {sortedData.map((item) => (
                <Row key={item.id} item={item} />
              ))}
            </InfiniteScroll>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
