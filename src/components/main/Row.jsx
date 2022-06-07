import React from "react";

const Row = ({ item }) => {
  return (
    <tr key={item.id}>
      <td>
        <img src={item.image} alt="" srcSet="" width="40px" height="40px" />
      </td>
      <td>{item.username}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.university}</td>
    </tr>
  );
};

export default Row;
