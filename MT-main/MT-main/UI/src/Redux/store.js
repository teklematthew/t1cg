import { configureStore } from "@reduxjs/toolkit";

import selector from "./reducers/reducer";
import register from "./reducers/registerReducer";
import login from "./reducers/loginReducer";

export const store = configureStore({
  reducer: {
    selector,
    register,
    login,
  },
});

export default store;
