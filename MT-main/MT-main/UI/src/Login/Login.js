import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { postLogin } from "../Redux/actions/actions";
import { selectPostUserLogin } from "../Redux/selectors/loginSelector";

const Login = () => {
  const dispatch = useAppDispatch();
  const userLogin = useAppSelector(selectPostUserLogin);

  const [password, setPassword] = React.useState("");

  const [username, setUsername] = React.useState("");
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h3> Login Here: </h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(postLogin({ username, password }));
        }}
      >
        <b>Username:</b>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <b>Password:</b>

        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <div className="message">
        <span className="loginErrorMessage">
          {userLogin.message ? userLogin.message : userLogin.error}
        </span>
      </div>
    </>
  );
};
export default Login;
