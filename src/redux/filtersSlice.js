import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    contactFilter: (state, action) => {
      state.name = action.payload.toLowerCase();
    },
  },
});
export const { contactFilter } = filterSlice.actions;
export default filterSlice.reducer;

// export const filter = createAction("filter/contactFilter");

// const initialeState = {
//   name: "",
// };

// export default function filterSliceReducer(state = initialeState, action) {
//   switch (action.type) {
//     case "filter/contactFilter":
//       return {
//         ...state,
//         name: action.payload.toLowerCase(),
//       };

//     default:
//       return state;
//   }
// }
