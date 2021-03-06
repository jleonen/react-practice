import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialLogin = {
  isValid: false,
};

const passSlice = createSlice({
  name: "passcode",
  initialState: initialLogin,
  reducers: {
    login(state) {
      state.isValid = true;
    },
    logout(state) {
      state.isValid = false;
    },
  },
});

const store = configureStore({
  reducer: passSlice.reducer,
});

export const passActions = passSlice.actions;
// export default passSlice.reducer;

export default store;
