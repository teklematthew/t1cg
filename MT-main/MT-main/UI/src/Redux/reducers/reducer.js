import * as actions from "../actions/actions";
import { createReducer } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  getItemsRequest: {
    error: "",
    fetching: false,
    success: false,
  },
  addItemsRequest: {
    error: "",
    fetching: false,
    success: false,
  },
};
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.addItems.pending, (state) => {
      state.addItemsRequest = {
        ...initialState.addItemsRequest,
        fetching: true,
      };
    })
    .addCase(actions.addItems.fulfilled, (state, action) => {
      state.addItemsRequest = {
        ...initialState.addItemsRequest,

        success: true,
      };
      state.items.push(action.payload);
    })
    .addCase(actions.addItems.rejected, (state, action) => {
      state.addItemsRequest = {
        ...initialState.addItemsRequest,
        error: action.error.message,
      };
    })
    .addCase(actions.getItems.pending, (state) => {
      state.getItemsRequest = {
        ...initialState.getItemsRequest,
        fetching: true,
      };
    })
    .addCase(actions.getItems.fulfilled, (state, action) => {
      state.getItemsRequest = {
        ...initialState.getItemsRequest,
        success: true,
      };
      state.items = action.payload;
    })
    .addCase(actions.getItems.rejected, (state, action) => {
      state.getItemsRequest = {
        ...initialState.getItemsRequest,
        error: action.error.message,
      };
    });
});
export default reducer;
