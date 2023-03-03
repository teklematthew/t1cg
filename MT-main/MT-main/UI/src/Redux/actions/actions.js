import { createAsyncThunk } from "@reduxjs/toolkit";

export const getItems = createAsyncThunk("UserTable/getItems", async () => {
  const response = await fetch("http://localhost:4000/users");
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
});

export const addItems = createAsyncThunk(
  "UserTable/addItems",
  async (items) => {
    const response = await fetch("http://localhost:4000/users/post", {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "text/javascript",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
    const data = await response.json();
    return data[0];
  }
);

export const addregiUsernames = createAsyncThunk(
  "Regi/addregiUsernames",
  async (postUserRequest) => {
    const response = await fetch("http://localhost:4000/registration/post", {
      method: "POST",
      // credentials: "include",
      body: JSON.stringify(postUserRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
    const data = await response.json();
    return data[0];
  }
);

export const postLogin = createAsyncThunk(
  "login/postLogin",
  async (postUserLoginRequest) => {
    console.log(postUserLoginRequest);
    const response = await fetch("http://localhost:4000/registration/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(postUserLoginRequest),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }

    const data = await response.json();

    localStorage.setItem("jwt", data.accessToken);
    return data;
  }
);

export const logout = createAsyncThunk("login/logout", async () => {
  const response = await fetch("http://localhost:4000/registration/logout", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Check if there is error -password don't match OR username already existed
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  const data = await response.json();
  localStorage.clear();

  return data;
});
