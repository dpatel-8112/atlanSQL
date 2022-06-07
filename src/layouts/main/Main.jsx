import React, { useState, useEffect } from "react";
import style from "../../assets/styles/main/Main.module.css";
import Input from "../../components/main/Input";
import Table from "../../components/main/Table";

const Main = () => {
  return (
    <div className={style.Main_Container}>
      <Input />
      <Table />
    </div>
  );
};

export default Main;
