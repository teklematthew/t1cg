import React, { useEffect, useState } from "react";
import { addregiUsernames } from "../Redux/actions/actions";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import PasswordChecklist from "react-password-checklist";
import { selectPostUserRequest } from "../Redux/selectors/regiSelector";

const Regi = () => {
  const dispatch = useAppDispatch();

  const postUserRequest = useAppSelector(selectPostUserRequest);
  const [password, setPassword] = React.useState("");
  const [passwordAgain, setPasswordAgain] = React.useState("");
  const [message] = useState("");
  const [username, setregiUsername] = React.useState("");

  return (
    <>
      <h3> Sign up</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(addregiUsernames({ username, password, passwordAgain }));
        }}
      >
        <b>Username:</b>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          onChange={(e) => setregiUsername(e.target.value)}
        />

        <b>Password:</b>

        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <b>Retype Password:</b>
        <input
          type="password"
          placeholder="Retype Password"
          name="passwordAgain"
          required
          onChange={(e) => setPasswordAgain(e.target.value)}
        />

        <PasswordChecklist
          rules={["match"]}
          value={password}
          valueAgain={passwordAgain}
          onChange={(isValid) => {}}
        />

        <button type="submit">Create Account</button>
      </form>
      <div className="message">
        <span className="errorMessage">
          {message ? message : postUserRequest.error}
        </span>
        <span className="registerSuccessMessage">
          {message ? message : postUserRequest.message}
        </span>
      </div>
    </>
  );
};
export default Regi;
