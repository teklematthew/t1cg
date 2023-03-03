import React, { useEffect } from "react";
import { getItems, addItems } from "../Redux/actions/actions";
import { selectItems } from "../Redux/selectors/selector";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const UserTable = () => {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <>
      <h3> ↓↓↓Insert a User Here!↓↓↓ </h3>
      <div>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => dispatch(addItems({ username, name, email }))}>
          Add User
        </button>
      </div>

      <h3> Hello World, the User Table!</h3>

      {items.map((item, i) => (
        <ol key={i}>
          <table border="1">
            <tbody>
              <tr>
                <td>Username</td>
                <td>Name</td>
                <td>Email </td>
              </tr>
              <tr>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            </tbody>
          </table>
        </ol>
      ))}
    </>
  );
};

export default UserTable;
