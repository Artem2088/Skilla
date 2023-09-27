import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL, TOKEN } from "../utils/Constant";

let inOut = "";

const initialState = {
  lists: [],
  title: "",
  each: "",
  sort: "",
  status: "",
  record: "",
};

const checkType = (sortType) => {
  if (sortType >= 0) {
    inOut = `&in_out=${sortType}`;
  }
  if (sortType == null) {
    inOut = "";
  }
  return inOut;
};

export const fetchGetRecord = createAsyncThunk(
  "lists/fetchGetRecord",
  async function (item) {
    const response = await fetch(
      `${URL}/getRecord?record=${item.record}&partnership_id=${item.partner_data.id}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
          "Content-type":
            "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "Content-Transfer-Encoding": "binary",
          "Content-Disposition": "filename=record.mp3",
        },
      }
    );
    if (response.ok) {
      let res = await response.blob();
      return res;
    }
    Promise.reject(`${response.status} ${response.statusText}`);
  }
);

export const fetchSortLists = createAsyncThunk(
  "lists/fetchSortLists",
  async function ({ newDate, startDate, endDate, sort }) {
    checkType(sort);

    const response = await fetch(
      `${URL}/getList?date_start=${
        newDate ? newDate : startDate
      }&date_end=${endDate}${inOut}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    return data;
  }
);

export const fetchLists = createAsyncThunk(
  "lists/fetchLists",
  async function ({ newDate, startDate, endDate }) {
    const response = await fetch(
      `${URL}/getList?date_start=${
        newDate ? newDate : startDate
      }&date_end=${endDate}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  }
);

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      let target = action.payload;
      state.title = target.value;
    },
    handleChangeEach: (state, action) => {
      let target = action.payload;
      state.each = target;
    },
    createSortOfType: (state, action) => {
      if (action.payload.each) {
        switch (action.payload.each) {
          case "Входящие":
            state.sort = 1;
            break;
          case "Исходящие":
            state.sort = 0;
            break;
          case "Все звонки":
            state.sort = null;
            break;
        }
      }
      return;
    },
    removeFilter: (state) => {
      state.sort = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.status = "resolved";
        state.lists.push(action.payload);
      })
      .addCase(fetchSortLists.fulfilled, (state, action) => {
        state.status = "resolved";
        state.lists.push(action.payload);
      })
      .addCase(fetchGetRecord.fulfilled, (state, action) => {
        state.status = "resolved";
        state.record = action.payload;
      });
  },
});

export const {
  handleChange,
  handleChangeEach,
  createSortOfType,
  removeFilter,
} = listSlice.actions;

export default listSlice.reducer;
