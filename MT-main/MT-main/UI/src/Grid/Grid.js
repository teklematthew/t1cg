import React, { useState, useEffect } from "react";
import { getItems } from "../Redux/actions/actions";
import { selectItems } from "../Redux/selectors/selector";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const Grid = () => {
  const items = useAppSelector(selectItems);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);
  return (
    <div>
      <h3> Hello World, the Grid!</h3>
      {items.map((item, i) => (
        <div key={i} className="grid-even-columns">
          <h2> Pulling API from jsonplaceholder.typicode.com </h2>
          <ol key={item.id}>
            <div className="Username">{item.username}</div>
            <div className="Name">{item.name}</div>
            <div className="PhoneNum">{item.phone}</div>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Grid;
