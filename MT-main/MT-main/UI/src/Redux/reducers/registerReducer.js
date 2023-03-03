import * as actions from "../actions/actions";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  postUserRequest: {
    error: "",
    fetching: false,
    success: false,
    message: "",
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addregiUsernames.pending, (state) => {
      state.postUserRequest = {
        ...initialState.postUserRequest,
        fetching: true,
      };
    })
    .addCase(actions.addregiUsernames.fulfilled, (state, action) => {
      state.postUserRequest = {
        ...initialState.postUserRequest,
        success: true,
        message: "User is successfully registered!",
      };
    })
    .addCase(actions.addregiUsernames.rejected, (state, action) => {
      state.postUserRequest = {
        ...initialState.postUserRequest,
        error: action.error.message,
      };
    });
});

export default reducer;
