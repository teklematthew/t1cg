import * as actions from "../actions/actions";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  postUserLoginRequest: {
    error: "",
    fetching: false,
    success: false,
    message: "",
  },
  postUserLogoutRequest: {
    error: "",
    fetching: false,
    success: false,
    message: "",
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(actions.postLogin.pending, (state) => {
      state.postUserLoginRequest = {
        ...initialState.postUserLoginRequest,
        fetching: true,
      };
    })
    .addCase(actions.postLogin.fulfilled, (state, action) => {
      state.postUserLoginRequest = {
        ...initialState.postUserLoginRequest,
        success: true,
        message: action.payload.message,
      };
    })
    .addCase(actions.postLogin.rejected, (state, action) => {
      state.postUserLoginRequest = {
        ...initialState.postUserLoginRequest,
        error: action.error.message,
      };
    })

    .addCase(actions.logout.pending, (state) => {
      state.postUserLogoutRequest = {
        ...initialState.postUserLogoutRequest,
        fetching: true,
      };
    })
    .addCase(actions.logout.fulfilled, (state, action) => {
      state.postUserLogoutRequest = {
        ...initialState.postUserLogoutRequest,
        success: true,
        message: action.payload.message,
      };
    })
    .addCase(actions.logout.rejected, (state, action) => {
      state.postUserLogoutRequest = {
        ...initialState.postUserLogoutRequest,
        error: action.error.message,
      };
    });
});

export default reducer;
