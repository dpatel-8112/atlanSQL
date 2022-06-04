import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "../../assets/styles/main/Main.module.css";
import Input from "../../components/main/Input";
import Table from "../../components/main/Table";

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
      <Input activeTab={activeTab} />
      <Table activeTab={activeTab} />
    </div>
  );
};

export default Main;
