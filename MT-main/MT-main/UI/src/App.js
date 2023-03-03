import React from "react";
import UserTable from "./UserTable";
import Grid from "./Grid";
import NavBar from "./Navbar";
import Home from "./Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Regi from "./Regi";
import Login from "./Login";
import PrivateRoutes from "./util/PrivateRoutes";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        {" "}
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="user-table" element={<UserTable />} />
          <Route path="grid" element={<Grid />} />
        </Route>
        <Route path="regi" element={<Regi />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
