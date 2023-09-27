import { createSlice } from "@reduxjs/toolkit";
import { date, months, year } from "../utils/Constant";

const initialState = {
  startDate: year + "-" + months + "-" + (date - 3),
  endDate: year + "-" + months + "-" + date,
  newDate: "",
};

const dateSlice = createSlice({
  name: "date",
  initialState,

  reducers: {
    createIntervalFilter: (state, action) => {
      if (action.payload.each) {
        switch (action.payload.each) {
          case "Неделя":
            state.newDate = year + "-" + months + "-" + (date - 7);
            break;
          case "Месяц":
            state.newDate = year + "-" + (months - 1) + "-" + (date - 3);
            break;
          case "Год":
            state.newDate = year - 1 + "-" + months + "-" + (date - 3);
            break;
        }
      }
    },
  },
});

export const { createIntervalFilter } = dateSlice.actions;

export default dateSlice.reducer;
