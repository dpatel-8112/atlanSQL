import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 1,
  totalTab: 1,
  active: 1,
  tabs: [
    {
      id: 1,
      title: "SELECT",
      api: "https://dummyjson.com/users",
      query: "SELECT * from lone_wolf",
      isDeleted: false,
    },
  ],
};

const TabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    addTab: (state, action) => {
      const { id, title, api, query } = action.payload;
      const tab = {
        id,
        title,
        api: "https://dummyjson.com/users",
        query,
        isDeleted: false,
      };
      state.tabs.push(tab);
      state.total += 1;
      state.totalTab += 1;
      state.active = id;
    },
    deleteTab: (state, action) => {
      const tab = state.tabs.find((tab) => tab.id === action.payload);
      tab.isDeleted = true;
      state.totalTab -= 1;
      state.active = state.tabs ? state.tabs[0].id : 1;
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { addTab, deleteTab, setActive } = TabSlice.actions;
export default TabSlice.reducer;
